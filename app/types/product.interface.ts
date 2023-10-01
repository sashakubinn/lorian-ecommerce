import { IReview } from './reviews.interface'

export interface IProduct {
	id: number
	title: string
	description: string
	img_url: string
	price: number
}

export interface IProductDetails {
	product: IProduct
}
