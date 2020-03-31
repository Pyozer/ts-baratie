import { Dish, DishSize } from './Dish';

export class Udon extends Dish {
    constructor(size: DishSize) {
        super('Udon', size, {
            noodle: 1,
            pork: 1,
            eggs: 1
        }, 2);
    }
}