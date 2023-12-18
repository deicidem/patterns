import { HeadPhones, Laptop, Phone } from "./Product";

export interface ProductFactory {
    createPhone(): Phone;
    createLaptop(): Laptop;
    createHeadPhones(): HeadPhones;
}
