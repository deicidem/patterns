import { Repository } from "./Repository";
import { Order } from "../Order/Order";

export class OrderRepository implements Repository<Order> {
	private idCounter: number;
	static instance: OrderRepository | null = null;
	items: Order[];

	private constructor() {
		this.idCounter = 0;
		this.items = [];
	}
	static getInstance(): OrderRepository {
		if (this.instance == null) {
			this.instance = new OrderRepository();
		}

		return this.instance;
	}
	private incrementIdCounter(): void {
		this.idCounter++;
	}
	getAll(): Order[] {
		return this.items;
	}
	getById(id: number): Order | null {
		return this.items.find((item) => item.id == id) ?? null;
	}
	create(item: Order): Order {
		this.incrementIdCounter();

		item.id = this.idCounter;
		this.items.push(item);

		return item;
	}
	update(id: number, item: Order): Order | null {
		let order = this.items.find((item) => item.id == id);

		if (order) {
			order.createdAt = item.createdAt;
			order.updatedAt = item.updatedAt;
			order.products = item.products;
			order.status = item.status;
			order.paymentMethod = item.paymentMethod;
			order.deliveryAddress = item.deliveryAddress;
			order.deliveryMethod = item.deliveryMethod;
			order.deliveryCost = item.deliveryCost;
			order.paymentStatus = item.paymentStatus;
			order.deliveryStatus = item.deliveryStatus;
			order.deliveryDate = item.deliveryDate;
		} else {
			return null;
		}

		return order;
	}
	delete(id: number): void {
		this.items = this.items.filter((item) => item.id != id);
	}
}
