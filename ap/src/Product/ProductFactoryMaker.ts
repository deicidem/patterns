import { AppleProductFactory } from "./AppleProductFactory";
import { ProductFactory } from "./ProductFactory";
import { SamsungProductFactory } from "./SamsungProductFactory";
import { XiaomiProductFactory } from "./XiaomiProductFactory";

export enum AvailableFactories {
	APPLE,
	SAMSUNG,
	XIAOMI,
}

export class ProductFactoryMaker {
	static makeFactory(factory: AvailableFactories): ProductFactory {
		switch (factory) {
			case AvailableFactories.APPLE:
				return new AppleProductFactory();
			case AvailableFactories.SAMSUNG:
				return new SamsungProductFactory();
			case AvailableFactories.XIAOMI:
				return new XiaomiProductFactory();
		}
	}
}
