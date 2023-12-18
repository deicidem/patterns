import { PaymentStrategy } from "../Payment/PaymentStrategy";
import { OrderRepository } from "../Repository/OrderRepository";
import { DeliveryStrategy } from "../Strategy/DeliveryStrategy";
import { DeliveryStatus, Order, PaymentStatus, OrderStatus } from "./Order";
export class OrderProcessingFacade {
	private orderRepository: OrderRepository;
	constructor() {
		this.orderRepository = OrderRepository.getInstance();
	}
	public processOrder(
		order: Order,
		paymentStrategy: PaymentStrategy,
		deliveryStrategy: DeliveryStrategy
	): boolean {
		let deliveryInformation = deliveryStrategy.deliver(order);

		this.orderRepository.update(order.id, {
			...order,
			deliveryCost: deliveryInformation.cost,
			deliveryStatus: DeliveryStatus.PENDING,
			deliveryDate: deliveryInformation.date,
			status: OrderStatus.PROCESSING,
		});

		let paymentSuccessful = paymentStrategy.processPayment(order);

		if (paymentSuccessful) {
			this.orderRepository.update(order.id, {
				...order,
				paymentStatus: PaymentStatus.PAID,
			});

			return true;
		}

		return false;
	}
}
