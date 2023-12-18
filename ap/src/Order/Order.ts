import { Product } from "../Product/Product";

export enum OrderStatus {
	PENDING = 1,
	PROCESSING = 2,
	COMPLETED = 3,
	CANCELLED = 4,
}

export enum DeliveryMethod {
	STANDART = 1,
	EXPRESS = 2,
	PICKUP = 3,
}

export enum DeliveryStatus {
	PENDING = 1,
	DELIVERING = 2,
	DELIVERED = 3,
}

export enum PaymentStatus {
	PENDING = 1,
	PAID = 2,
	ERROR = 3,
}

export enum PaymentMethod {
	CARD = 1,
	PAYPAL = 2,
	QIWI = 3,
}

export interface Order {
	id: number;
	createdAt: Date;
	updatedAt: Date;
	products: Product[];
	status: OrderStatus;
	paymentMethod: PaymentMethod | null;
	deliveryAddress: string | null;
	deliveryMethod: DeliveryMethod | null;
	deliveryCost: number;
	deliveryStatus: DeliveryStatus | null;
	deliveryDate: Date | null;
	paymentStatus: PaymentStatus | null;
}

export class Order implements Order {
	constructor() {
		this.id = 0;
		this.createdAt = new Date();
		this.updatedAt = new Date();
		this.products = [];
		this.status = OrderStatus.PENDING;
		this.paymentMethod = null;
		this.deliveryAddress = null;
		this.deliveryMethod = null;
		this.deliveryCost = 0;
		this.paymentStatus = null;
		this.deliveryStatus = null;
		this.deliveryDate = null;
	}
}
