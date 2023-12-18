import {
	DeliveryMethod,
	DeliveryStatus,
	Order,
	OrderStatus,
	PaymentMethod,
	PaymentStatus,
} from "./Order";
import { Product } from "../Product/Product";

export class OrderBuilder {
	private order: Order;
	constructor() {
		this.order = new Order();
	}
	withProducts(products: Product[]): OrderBuilder {
		this.order.products = products;
		return this;
	}
	withStatus(status: OrderStatus): OrderBuilder {
		this.order.status = status;
		return this;
	}
	withPaymentMethod(paymentMethod: PaymentMethod): OrderBuilder {
		this.order.paymentMethod = paymentMethod;
		return this;
	}
	withDeliveryAddress(deliveryAddress: string): OrderBuilder {
		this.order.deliveryAddress = deliveryAddress;
		return this;
	}
	withDeliveryMethod(deliveryMethod: DeliveryMethod): OrderBuilder {
		this.order.deliveryMethod = deliveryMethod;
		return this;
	}
	withDeliveryCost(deliveryCost: number): OrderBuilder {
		this.order.deliveryCost = deliveryCost;
		return this;
	}
	withPaymentStatus(paymentStatus: PaymentStatus): OrderBuilder {
		this.order.paymentStatus = paymentStatus;
		return this;
	}
	withDeliveryStatus(deliveryStatus: DeliveryStatus): OrderBuilder {
		this.order.deliveryStatus = deliveryStatus;
		return this;
	}
	withDeliveryDate(deliveryDate: Date): OrderBuilder {
		this.order.deliveryDate = deliveryDate;
		return this;
	}

	build(): Order {
		return this.order;
	}
}
