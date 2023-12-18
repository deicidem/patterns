import { Order } from "../Order/Order";
import { PaymentStrategy } from "./PaymentStrategy";

type PayPalData = {
	firstName: string;
	lastName: string;
	bankAccount: string;
};

export class PayPalPaymentStrategy implements PaymentStrategy {
	payPalData: PayPalData;
	constructor(payPalData: PayPalData) {
		this.payPalData = payPalData;
	}
	public processPayment(order: Order): boolean {
		console.log(`Processing PayPal payment for order: ${order.id}`);
		console.log(`Total cost: ${order.totalCost}`);
		console.log(`First name: ${this.payPalData.firstName}`);
		console.log(`Last name: ${this.payPalData.lastName}`);
		console.log(`Bank account: ${this.payPalData.bankAccount}`);
		console.log(`Payment successful!`);
		return true;
	}
}
