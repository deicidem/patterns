import { Order } from "./Order";

export class OrderCostCounter {
	static getTotalCost(order: Order): number {
		let totalCost = 0;
		for (let product of order.products) {
			totalCost += product.price;
		}
		totalCost += order.deliveryCost;
		return totalCost;
	}
}
