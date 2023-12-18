import { Order } from "../Order/Order";
import { DeliveryInformation, DeliveryStrategy } from "./DeliveryStrategy";

export class ExpressDeliveryStrategy implements DeliveryStrategy {
	deliver(order: Order): DeliveryInformation {
		let cost = 0;
		let date = new Date();
		if (order.deliveryAddress?.toLowerCase().includes("moscow")) {
			cost = 10;
			date = new Date(
				order.createdAt.getFullYear(),
				order.createdAt.getMonth(),
				order.createdAt.getDate() + 1
			);
		} else {
			cost = 50;
			date = new Date(
				order.createdAt.getFullYear(),
				order.createdAt.getMonth(),
				order.createdAt.getDate() + 4
			);
		}
		return {
			cost,
			date,
		};
	}
}
