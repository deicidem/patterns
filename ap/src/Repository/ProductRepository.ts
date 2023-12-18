import { Repository } from "./Repository";
import { Product } from "../Product/Product";

export class ProductRepository implements Repository<Product> {
	private idCounter: number;
	static instance: ProductRepository | null = null;
	items: Product[];

	private constructor() {
		this.idCounter = 0;
		this.items = [];
	}
	static getInstance(): ProductRepository {
		if (this.instance == null) {
			this.instance = new ProductRepository();
		}

		return this.instance;
	}
	private incrementIdCounter(): void {
		this.idCounter++;
	}
	getAll(): Product[] {
		return this.items;
	}
	getById(id: number): Product | null {
		return this.items.find((item) => item.id == id) ?? null;
	}
	create(item: Product): Product {
		this.incrementIdCounter();

		item.id = this.idCounter;
		this.items.push(item);

		return item;
	}
	update(id: number, item: Product): Product | null {
		let product = this.items.find((item) => item.id == id);

		if (product) {
			product.name = item.name;
			product.price = item.price;
			product.stock = item.stock;
			product.type = item.type;
			product.updatedAt = new Date();
		} else {
			return null;
		}

		return product;
	}
	delete(id: number): void {
		this.items = this.items.filter((item) => item.id != id);
	}
}
