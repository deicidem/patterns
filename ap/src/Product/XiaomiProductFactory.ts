import { Phone, Laptop, HeadPhones, ProductType } from "./Product";
import { ProductFactory } from "./ProductFactory";

export class XiaomiPhone implements Phone {
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

export class XiaomiLaptop implements Laptop {
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

export class XiaomiHeadPhones implements HeadPhones {
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

export class XiaomiProductFactory implements ProductFactory {
	createPhone(): Phone {
		return new XiaomiPhone("Mi 13", 500, 10);
	}
	createLaptop(): Laptop {
		return new XiaomiLaptop("Notebook Pro", 1500, 10);
	}
	createHeadPhones(): HeadPhones {
		return new XiaomiHeadPhones("AirDots", 50, 10);
	}
}
