import { Dish, DishSize } from './Dish';
import { objToMap } from '../../utils/Func';

export class Udon extends Dish {
    constructor(size: DishSize) {
        super('Udon', size, objToMap({
            noodle: 1,
            pork: 1,
            eggs: 1
        }), 2);
    }
}