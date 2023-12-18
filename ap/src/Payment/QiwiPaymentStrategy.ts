import { Order } from "../Order/Order";
import { OrderCostCounter } from "../Order/OrderCostCounter";
import { PaymentStrategy } from "./PaymentStrategy";

type QiwiData = {
	firstName: string;
	lastName: string;
	phoneNumber: string;
};

export class QiwiPaymentStrategy implements PaymentStrategy {
	qiwiData: QiwiData;
	constructor(qiwiData: QiwiData) {
		this.qiwiData = qiwiData;
	}
	public processPayment(order: Order): boolean {
		const totalCost = OrderCostCounter.getTotalCost(order);
		console.log(`Processing Qiwi payment for order: ${order.id}`);
		console.log(`Total cost: ${totalCost}`);
		console.log(`First name: ${this.qiwiData.firstName}`);
		console.log(`Last name: ${this.qiwiData.lastName}`);
		console.log(`Phone number: ${this.qiwiData.phoneNumber}`);
		console.log(`Payment successful!`);
		return true;
	}
}
