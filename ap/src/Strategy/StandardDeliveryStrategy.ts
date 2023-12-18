import { Order } from "../Order/Order";
import { DeliveryInformation, DeliveryStrategy } from "./DeliveryStrategy";

export class StandardDeliveryStrategy implements DeliveryStrategy {
	deliver(order: Order): DeliveryInformation {
		let cost = 0;
		let date = new Date();
		if (order.deliveryAddress?.toLowerCase().includes("moscow")) {
			cost = 2;
			date = new Date(
				order.createdAt.getFullYear(),
				order.createdAt.getMonth(),
				order.createdAt.getDate() + 3
			);
		} else {
			cost = 5;
			date = new Date(
				order.createdAt.getFullYear(),
				order.createdAt.getMonth(),
				order.createdAt.getDate() + 10
			);
		}
		return {
			cost,
			date,
		};
	}
}
