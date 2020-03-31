import { Dish } from './Dish/Dish';
import { Cooker } from './Cooker';
import { BaseElement } from './BaseElement';
import { isNull } from '../utils/Func';

export class Kitchen extends BaseElement {
    private _cookers: Cooker[] = [];
    private _dishes: Dish[] = [];

    constructor(cookerCount: number) {
        super();
        this._cookers = Array.from({ length: cookerCount }, () => new Cooker());
    }

    public get cookers(): Cooker[] {
        return this._cookers;
    }
    public get dishes(): Dish[] {
        return this._dishes;
    }

    public canHandleNewDish(): boolean {
        return this._dishes.length < this._cookers.length;
    }

    public prepareNewDish(dish: Dish): void {
        this._dishes.push(dish);

        const cookerAvailable = this._cookers
            .find(c => c.canCook());

        if (isNull(cookerAvailable)) {
            throw 'No more cooker available in this Kitchen';
        }
        cookerAvailable.prepareDish(dish, () => {
            // TODO:
        });
    }
}