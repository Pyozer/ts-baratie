import { Dish, DishSize } from './Dish';

export class Takoyaki extends Dish {
    constructor(size: DishSize) {
        super('Takoyaki', size, {
            octopus: 1,
            'soja sauce': 2
        }, 1);
    }
}