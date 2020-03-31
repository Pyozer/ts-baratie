import { KitchenStock } from './KitchenStock';
import { Dish } from './Dish/Dish';
import { Cooker } from './Cooker';
import { BaseElement } from './BaseElement';
import { isNull, remove } from '../utils/Func';

export class Kitchen extends BaseElement {
    private _cookers: Cooker[] = [];
    private _dishes: Dish[] = [];
    private stock: KitchenStock;

    constructor(cookerCount: number) {
        super();
        this._cookers = Array.from({ length: cookerCount }, () => new Cooker());
        this.stock = new KitchenStock(this);
    }

    public get cookers(): Cooker[] {
        return this._cookers;
    }
    public get dishes(): Dish[] {
        return this._dishes;
    }

    public canHandleNewDish(dishToCook: Dish): boolean {
        if (this.dishes.length >= this._cookers.length) {
            return false;
        }
        for(const [ingredient, qty] of dishToCook.ingredients) {
            if (!this.stock.hasInStock(ingredient, qty)) {
                return false;
            }
        }
        return true;
    }

    public prepareNewDish(dish: Dish, onDone: () => void): void {
        this._dishes.push(dish);

        const cookerAvailable = this._cookers
            .find(c => c.canCook());

        if (isNull(cookerAvailable)) {
            throw 'No more cooker available in this Kitchen';
        }
        for(const [ingredient, qty] of dish.ingredients) {
            this.stock.takeInStock(ingredient, qty);
        }
        cookerAvailable.prepareDish(dish, () => {
            remove(this._dishes, dish);
            onDone();
        });
    }

    public displayStatus(): void {
        console.log(`Kitchen #${this.id} preparing ${this.dishes.length} dishes`);
        this.cookers.forEach((c) => c.displayStatus());
        this.stock.displayStatus();
    }
}