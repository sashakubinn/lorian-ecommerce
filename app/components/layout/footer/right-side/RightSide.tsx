import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

import Column from '@/ui/grid/Column'
import SquareButton from '@/ui/square-button/SquareButton'

const RightSide = () => {
	return (
		<>
			<div className='m-10'>
				<div className='uppercase text-sm text-gray pb-8'> Latest news </div>
				<div className='uppercase text-[1.8rem] font-medium text-white pb-2'>
					Our new dress
				</div>
				<div className='uppercase text-[1.8rem] font-medium text-white pb-8'>
					collection
				</div>
				<div className='text-sm'>Conquer city tops in comfort with Kubin</div>
				<div className='text-sm'>dress collection</div>
			</div>
			<SquareButton
				className='absolute mb-48 ml-28'
				Icon={AiOutlineArrowRight}
				onClick={() => {}}
			/>
		</>
	)
}
export default RightSide
