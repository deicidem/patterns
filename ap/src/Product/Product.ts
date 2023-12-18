export enum ProductType {
	PHONE,
	LAPTOP,
	HEADPHONES,
}

export interface Product {
	id: number;
	name: string;
	price: number;
	stock: number;
	type: ProductType;
	createdAt: Date;
	updatedAt: Date;
}

export interface Phone extends Product {
	type: ProductType.PHONE;
}

export interface Laptop extends Product {
	type: ProductType.LAPTOP;
}

export interface HeadPhones extends Product {
	type: ProductType.HEADPHONES;
}
