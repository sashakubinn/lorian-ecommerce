import { current } from '@reduxjs/toolkit'
import { FC, useState } from 'react'
import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { ICartItem } from '@/types/cart.interface'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { removeFromCart, changeQuantity } = useActions()

	const { cart } = useCart()

	const quantity = cart.find(cartItem => cartItem.id === item.id)?.quantity

	return (
		<div className='mt-3'>
			<button
				className='mx-0.5 p-1 hover:bg-dark-primary rounded'
				onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
				disabled={quantity === 1}
			>
				<FiMinus fontSize={15} />
			</button>

			<span className='text-base'> {quantity} </span>

			<button
				className='mx-0.5 p-1 hover:bg-dark-primary rounded'
				onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
			>
				<FiPlus fontSize={15} />
			</button>

			<button
				className='ml-14 hover:bg-dark-primary p-1 rounded'
				onClick={() => removeFromCart({ id: item.id })}
			>
				<FiTrash fontSize={17} />
			</button>
		</div>
	)
}

export default CartActions
