import { Dish, DishSize } from './Dish';
import { objToMap } from '../../utils/Func';

export class MatchaCookie extends Dish {
    constructor(size: DishSize) {
        super('MatchaCookie', size, objToMap({
            dough: 1,
            matcha: 1,
            chocolate: 1
        }), 4);
    }
}