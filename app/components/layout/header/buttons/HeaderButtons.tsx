import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { FiBell } from 'react-icons/fi'

import Column from '@/ui/grid/Column'
import SquareButton from '@/ui/square-button/SquareButton'

import Cart from '../cart/Cart'

const HeaderButtons = () => {
	return (
		<Column size={2} className='gap-7'>
			<SquareButton Icon={FiSearch} onClick={() => {}} />
			<SquareButton Icon={FiBell} onClick={() => {}} />
			<Cart />
		</Column>
	)
}

export default HeaderButtons
