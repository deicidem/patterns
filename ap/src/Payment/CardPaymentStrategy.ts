import { Order } from "../Order/Order";
import { OrderCostCounter } from "../Order/OrderCostCounter";
import { PaymentStrategy } from "./PaymentStrategy";

type CardData = {
	cardNumber: string;
	cvv: string;
	expirationMonth: string;
	expirationYear: string;
	firstName: string;
	lastName: string;
};

export class CardPaymentStrategy implements PaymentStrategy {
	cardData: CardData;
	constructor(cardData: CardData) {
		this.cardData = cardData;
	}
	public processPayment(order: Order): boolean {
		const totalCost = OrderCostCounter.getTotalCost(order);
		console.log(`Processing card payment for order: ${order.id}`);
		console.log(`Total cost: ${totalCost}`);
		console.log(`Card number: ${this.cardData.cardNumber}`);
		console.log(`CVV: ${this.cardData.cvv}`);
		console.log(`Expiration month: ${this.cardData.expirationMonth}`);
		console.log(`Expiration year: ${this.cardData.expirationYear}`);
		console.log(`First name: ${this.cardData.firstName}`);
		console.log(`Last name: ${this.cardData.lastName}`);
		console.log(`Payment successful!`);

		return true;
	}
}
