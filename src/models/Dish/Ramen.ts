import { Dish, DishSize } from './Dish';
import { objToMap } from '../../utils/Func';

export class Ramen extends Dish {
    constructor(size: DishSize) {
        super('Ramen', size, objToMap({
            noodle: 1,
            chicken: 1,
            eggs: 1
        }), 2);
    }
}