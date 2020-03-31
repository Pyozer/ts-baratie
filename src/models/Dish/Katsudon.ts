import { Dish, DishSize } from './Dish';

export class Katsudon extends Dish {
    constructor(size: DishSize) {
        super('Katsudon', size, {
            rice: 1,
            pork: 1,
            eggs: 1
        }, 2);
    }
}