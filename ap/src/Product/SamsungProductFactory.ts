import { Phone, Laptop, HeadPhones, ProductType } from "./Product";
import { ProductFactory } from "./ProductFactory";

export class SamsungPhone implements Phone {
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

export class SamsungLaptop implements Laptop {
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

export class SamsungHeadPhones implements HeadPhones {
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

export class SamsungProductFactory implements ProductFactory {
	createPhone(): Phone {
		return new SamsungPhone("Galaxy S20", 1000, 10);
	}
	createLaptop(): Laptop {
		return new SamsungLaptop("Galaxy Book", 2100, 10);
	}
	createHeadPhones(): HeadPhones {
		return new SamsungHeadPhones("Galaxy Buds", 250, 10);
	}
}
