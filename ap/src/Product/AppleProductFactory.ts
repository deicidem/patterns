import { Phone, Laptop, HeadPhones, ProductType } from "./Product";
import { ProductFactory } from "./ProductFactory";

export class ApplePhone implements Phone {
	type: ProductType.PHONE;
	id: number;
	name: string;
	price: number;
	stock: number;
	createdAt: Date;
	updatedAt: Date;
	constructor(name: string, price: number, stock: number) {
		this.type = ProductType.PHONE;
		this.id = 0;
		this.name = name;
		this.price = price;
		this.stock = stock;
		this.createdAt = new Date();
		this.updatedAt = new Date();
	}
}

export class AppleLaptop implements Laptop {
	type: ProductType.LAPTOP;
	id: number;
	name: string;
	price: number;
	stock: number;
	createdAt: Date;
	updatedAt: Date;
	constructor(name: string, price: number, stock: number) {
		this.type = ProductType.LAPTOP;
		this.id = 0;
		this.name = name;
		this.price = price;
		this.stock = stock;
		this.createdAt = new Date();
		this.updatedAt = new Date();
	}
}

export class AppleHeadPhones implements HeadPhones {
	type: ProductType.HEADPHONES;
	id: number;
	name: string;
	price: number;
	stock: number;
	createdAt: Date;
	updatedAt: Date;
	constructor(name: string, price: number, stock: number) {
		this.type = ProductType.HEADPHONES;
		this.id = 0;
		this.name = name;
		this.price = price;
		this.stock = stock;
		this.createdAt = new Date();
		this.updatedAt = new Date();
	}
}

export class AppleProductFactory implements ProductFactory {
	createPhone(): Phone {
		return new ApplePhone("iPhone 15", 1000, 10);
	}
	createLaptop(): Laptop {
		return new AppleLaptop("MacBook Pro", 2000, 10);
	}
	createHeadPhones(): HeadPhones {
		return new AppleHeadPhones("AirPods Pro", 250, 10);
	}
}
