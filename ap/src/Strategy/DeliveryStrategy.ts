import { Order } from "../Order/Order";

export type DeliveryInformation = {
	cost: number;
	date: Date;
};

export interface DeliveryStrategy {
	deliver(order: Order): DeliveryInformation;
}
