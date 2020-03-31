import { Dish, DishSize } from './Dish';

export class MatchaCookie extends Dish {
    constructor(size: DishSize) {
        super('MatchaCookie', size, {
            dough: 1,
            matcha: 1,
            chocolate: 1
        }, 4);
    }
}