import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { FiShoppingBag } from 'react-icons/fi'

import SquareButton from '@/ui/square-button/SquareButton'

import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'

import { formatToCurrency } from '@/utils/format-to-currency'

import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import { PaymentService } from '@/services/PaymentService'

const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)
	const { cart, total } = useCart()

	const { push } = useRouter()

	const { mutate } = useMutation(
		['create payment'],
		() => PaymentService.createPayment(total),
		{
			onSuccess(data) {
				push(data.confirmation.confirmation_url)
			}
		}
	)

	return (
		<div className='relative' ref={ref}>
			<SquareButton
				Icon={FiShoppingBag}
				onClick={() => {
					setIsShow(!isShow)
				}}
				number={cart.length}
			/>
			<div
				className={cn(
					'absolute top-10 w-[19.6rem] -left-[12.8rem] bg-[#131313] p-5 rounded-lg text-sm menu z-10',
					isShow ? 'open-menu' : 'close-menu'
				)}
			>
				<div className={styles.cart}>
					{cart.length ? (
						cart.map(item => <CartItem item={item} key={item.id} />)
					) : (
						<div>Cart is empty!</div>
					)}
				</div>

				<div className={styles.footer}>
					<div>Total:</div>
					<div>{formatToCurrency(total)}</div>
				</div>
				<div className='center'>
					<button onClick={() => mutate()} className='btn-link mt-3'>
						Payment
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
