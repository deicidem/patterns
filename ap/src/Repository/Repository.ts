export interface Repository<T> {
	items: T[];
	getAll(): T[];
	getById(id: number): T | null;
	create(item: T): T;
	update(id: number, item: T): T | null;
	delete(id: number): void;
}
