import Image from 'next/image'
import { FC } from 'react'

import Layout from '@/layout/Layout'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

import { IProduct, IProductDetails } from '@/types/product.interface'

import { formatToCurrency } from '@/utils/format-to-currency'

import ProductItem from './ProductItem'
import { IProductsPage } from '@/../pages'

const Shop: FC<IProductsPage> = ({ products }) => {
	return (
		<div>
			<Layout title='Shop' description='Catalog clothing and accessories'>
				<Row
					className='bg-dark-primary'
					>
					{products.map(product => (
						<ProductItem product={product} key={product.id} />
					))}
				</Row>
			</Layout>
		</div>
	)
}

export default Shop
