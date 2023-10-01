import { IProductsPage } from '.'
import axios from 'axios'
import { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'

import Shop from '@/screens/shop/Shop'
import { LINK, ProductService } from '@/services/ProductService'

const ShopPage: NextPage<IProductsPage> = () => {
	const [products, setProducts] = useState()

	useEffect(() => {
		const getProducts = async () => {
			try {
				const { data } = await axios.get(LINK)
				setProducts(data)
				console.log(data)
			} catch (error) {
				console.error('fix this', error)
			}
		}
		getProducts()
	}, [])

	if (!products) {
		return <h1> </h1>
	}

	return <Shop products={products} />
}

export default ShopPage
