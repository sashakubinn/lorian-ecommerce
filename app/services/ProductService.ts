import axios from 'axios'

import { IProduct } from '@/types/product.interface'

import { axiosClassic } from '@/api/api'

export const LINK = 'https://64a2d42db45881cc0ae5c3ec.mockapi.io/items'
const PRODUCTS = '/products'

export const ProductService = {
	async getProducts() {
		const { data } = await axios.get(LINK)
		console.log(data)
		return data
	},

	async bySearchTerm(searchTerm: string) {
		return axiosClassic.get<IProduct[]>(`${PRODUCTS}/search`, {
			params: { searchTerm }
		})
	},

	async byId(id: number) {
		return axiosClassic.get<IProduct>(`${PRODUCTS}/${id}`)
	},

	async bySlug(slug: string) {
		return axiosClassic.get<IProduct>(`${PRODUCTS}/slug/${slug}`)
	},

	async getRelatives(withoutId: number) {
		return axiosClassic.get<IProduct[]>(`${PRODUCTS}/relatives/${withoutId}`)
	}
}
