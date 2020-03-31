import { Dish, DishSize } from './Dish';

export class Ramen extends Dish {
    constructor(size: DishSize) {
        super('Ramen', size, {
            noodle: 1,
            chicken: 1,
            eggs: 1
        }, 2);
    }
}