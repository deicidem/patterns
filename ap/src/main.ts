import { OrderBuilder } from "./Order/OrderBuilder";
import { OrderProcessingFacade } from "./Order/OrderProcessingFacade";
import { AvailableFactories, ProductFactoryMaker } from "./Product/ProductFactoryMaker";
import { OrderRepository } from "./Repository/OrderRepository";
import { ProductRepository } from "./Repository/ProductRepository";
import { Product } from "./Product/Product";
import { DeliveryMethod, PaymentMethod } from "./Order/Order";
import { CardPaymentStrategy } from "./Payment/CardPaymentStrategy";
import { ExpressDeliveryStrategy } from "./Strategy/ExpressDeliveryStrategy";

const orderProcessingFacade = new OrderProcessingFacade();
const orderRepository = OrderRepository.getInstance();
const productRepository = ProductRepository.getInstance();
const appleProductFactory = ProductFactoryMaker.makeFactory(AvailableFactories.APPLE);
const samsungProductFactory = ProductFactoryMaker.makeFactory(AvailableFactories.SAMSUNG);
const xiaomiProductFactory = ProductFactoryMaker.makeFactory(AvailableFactories.XIAOMI);
const orderBuilder = new OrderBuilder();

productRepository.create(appleProductFactory.createPhone());
productRepository.create(appleProductFactory.createLaptop());
productRepository.create(appleProductFactory.createHeadPhones());

productRepository.create(samsungProductFactory.createPhone());
productRepository.create(samsungProductFactory.createLaptop());
productRepository.create(samsungProductFactory.createHeadPhones());

productRepository.create(xiaomiProductFactory.createPhone());
productRepository.create(xiaomiProductFactory.createLaptop());
productRepository.create(xiaomiProductFactory.createHeadPhones());

const products: Product[] = [];

let product = productRepository.getById(1);
if (product) {
	products.push(product);
}

product = productRepository.getById(2);
if (product) {
	products.push(product);
}

product = productRepository.getById(5);
if (product) {
	products.push(product);
}

orderBuilder.withProducts(products);

orderBuilder.withPaymentMethod(PaymentMethod.CARD);
orderBuilder.withDeliveryAddress("Russia, Moscow, Snezhnaya, 16");
orderBuilder.withDeliveryMethod(DeliveryMethod.EXPRESS);

const order = orderBuilder.build();
orderRepository.create(order);
console.log("Created order: " + order.id);
console.log("Order information: ", order);

console.log("");
const paymentStrategy = new CardPaymentStrategy({
	cardNumber: "1234567890123456",
	cvv: "123",
	expirationMonth: "12",
	expirationYear: "2028",
	firstName: "Andrey",
	lastName: "Pochitaev",
});

const deliveryStrategy = new ExpressDeliveryStrategy();

const orderProcessed = orderProcessingFacade.processOrder(order, paymentStrategy, deliveryStrategy);

console.log(orderProcessed ? "Order was processed" : "Order was not processed");

const orders = orderRepository.getAll();

console.log("");
console.log("All orders: ");
for (const order of orders) {
	console.log(order);
}
