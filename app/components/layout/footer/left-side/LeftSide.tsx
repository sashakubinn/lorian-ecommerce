import Image from 'next/image'
import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'
import SquareButton from '@/ui/square-button/SquareButton'

const LeftSide = () => {
	return (
		<>
			<div className='m-10'>
				<div className='uppercase text-sm text-gray pb-8'> New Arrival </div>
				<div className='uppercase text-[2rem] font-medium text-white pb-2'>
					New Lorian evening
				</div>
				<div className='uppercase text-[2rem] font-medium text-white pb-8'>
					dress design
				</div>
				<div className='text-sm'>
					We are discovering a new fashion style, buy
				</div>
				<div className='text-sm'>from the Kubin Store and become one of us</div>
			</div>
			<div className='bg-dark-primary ml-72'>
				<Image src='/images/arrival.jpg' alt='' width={240} height={227} />
			</div>
			<SquareButton
				className='absolute mb-48 ml-28'
				Icon={FiShoppingBag}
				onClick={() => {}}
			/>
		</>
	)
}

export default LeftSide
