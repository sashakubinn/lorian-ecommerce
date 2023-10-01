import { iteratorSymbol } from 'immer/dist/internal'
import Image from 'next/image'
import { FC } from 'react'

import CartActions from '@/layout/header/cart/cart-item/cart-actions/CartActions'

import { useCart } from '@/hooks/useCart'

import { ICartItem } from '@/types/cart.interface'

import { formatToCurrency } from '@/utils/format-to-currency'

import styles from '../Cart.module.scss'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	const { cart } = useCart()
	const itemCart = cart.find(cartItem => item.id === cartItem.id)
	const itemPrice = itemCart ? itemCart.product.price * itemCart.quantity : 0
	return (
		<div className={styles.item}>
			<img
				src={item.product.img_url}
				width={100}
				height={100}
				alt={item.product.title}
			/>
			<div>
				<div className={styles.name}>{item.product.title}</div>
				{itemPrice ? (
					<div className={styles.price}>{formatToCurrency(itemPrice)}</div>
				) : (
					<div className={styles.price}>
						{formatToCurrency(item.product.price)}
					</div>
				)}

				<CartActions item={item} />
			</div>
		</div>
	)
}

export default CartItem
