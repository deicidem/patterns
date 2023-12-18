import { Order } from "../Order/Order";

export interface PaymentStrategy {
	processPayment(order: Order): boolean;
}
