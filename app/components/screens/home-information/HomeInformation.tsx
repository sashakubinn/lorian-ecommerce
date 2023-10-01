import React from 'react'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

const HomeInformation = () => {
	return (
		<Row isBordered={false}>
			<Column size={3} className='flex-col border-t-2 py-14'>
				<div className='font-thin text-3xl text-white'>100K</div>
				<div className='text-white/60'>Customers</div>
			</Column>
			<Column size={9} className='flex-col border-t-2'>
				<div className='p-10'>
					<div className='font-thin text-white mb-5 '>New collection</div>
					<div className='text-white/60'>
						The red dress was inspired by a love of fashion and a fear of
						complacency. Our challenge was to create a dress.
					</div>
				</div>
			</Column>
		</Row>
	)
}

export default HomeInformation
