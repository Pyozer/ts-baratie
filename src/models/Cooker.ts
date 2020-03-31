import { Dish } from './Dish/Dish';
import { BaseElement } from './BaseElement';
import { isNull } from '../utils/Func';
import { setTimer } from '../utils/Timer';

export class Cooker extends BaseElement {
    private _dish: Dish;

    public canCook(): boolean {
        return isNull(this._dish);
    }

    public dishCooking(): Dish {
        return this._dish;
    }

    public prepareDish(dish: Dish, onDone: () => void): void {
        this._dish = dish;

        console.log(`Cooker #${this.id} start preparing ${this._dish.name} ${this._dish.sizeStr} (#${this._dish.id})`);
        this._dish.startPreparing();

        setTimer(dish.bakeTime, () => {
            this.finishDishPreparing();
            onDone();
        });
    }
    
    private finishDishPreparing(): void {
        this._dish.donePreparing();
        console.log(`Cooker #${this.id} finish to prepare ${this._dish.name} ${this._dish.sizeStr} (#${this._dish.id})`);
        this._dish = null;
    }
}