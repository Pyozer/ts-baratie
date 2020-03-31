import { Dish, DishSize } from './Dish';
import { objToMap } from '../../utils/Func';

export class Katsudon extends Dish {
    constructor(size: DishSize) {
        super('Katsudon', size, objToMap({
            rice: 1,
            pork: 1,
            eggs: 1
        }), 2);
    }
}