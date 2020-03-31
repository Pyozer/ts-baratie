import { Dish, DishSize } from './Dish';
import { objToMap } from '../../utils/Func';

export class Takoyaki extends Dish {
    constructor(size: DishSize) {
        super('Takoyaki', size, objToMap({
            octopus: 1,
            'soja sauce': 2
        }), 1);
    }
}