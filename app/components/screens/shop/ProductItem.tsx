import { FC } from 'react'

import Column from '@/ui/grid/Column'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/types/product.interface'

import { formatToCurrency } from '@/utils/format-to-currency'

interface IProductItem {
	product: IProduct
}

const ProductItem: FC<IProductItem> = ({ product }) => {
	const { cart } = useCart()
	const { addToCart, removeFromCart } = useActions()

	const currentElement = cart.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<Column size={4}>
			<div className='flex text-white p-6 items-center flex-col justify-center bg-gray/50'>
				<img
					className='rounded-sm'
					src={product.img_url}
					style={{
						height: 420,
						width: 320
					}}
				/>

				<h2 className='pt-3 text-2xl leading-6 h-12 overflow-hidden '>
					{product.title}
				</h2>
				<div className='text-xl pt-4'>{formatToCurrency(product.price)}</div>
				<button
					className='m-5 px-5 py-4 text-xl border-black rounded-3xl bg-black/80
								 hover:bg-black/100  '
					onClick={() =>
						currentElement
							? removeFromCart({ id: currentElement.id })
							: addToCart({
									product,
									quantity: 1
							  })
					}
				>
					{currentElement ? 'Remove from cart' : 'Add to cart'}
				</button>
			</div>
		</Column>
	)
}

export default ProductItem
