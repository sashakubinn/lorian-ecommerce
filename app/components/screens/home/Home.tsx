import Image from 'next/image'
import { FC } from 'react'

import Layout from '@/layout/Layout'
import LeftSide from '@/layout/footer/left-side/LeftSide'
import RightSide from '@/layout/footer/right-side/RightSide'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

import HomeInformation from '../home-information/HomeInformation'
import HotSale from '../hot-sale/HotSale'

import { IProductsPage } from '@/../pages'

const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
		>
			<Row className='bg-dark-primary'>
				<Column size={8} isPadding={false}>
					<Image src='/images/main-4x.png' alt='' width={892} height={769} />
				</Column>
				<Column
					size={4}
					isPadding={false}
					isCenter={false}
					className='flex-col'
				>
					<HotSale />
					<HomeInformation />
				</Column>
			</Row>
			<Row>
				<Column size={8} className='bg-[#131313]' isCenter={false}>
					<LeftSide />
				</Column>
				<Column size={4} isPadding={false}>
					<RightSide />
				</Column>
			</Row>
		</Layout>
	)
}

export default Home
