import { Kitchen } from './Kitchen';
import { BaseElement } from './BaseElement';
import { Dish } from './Dish/Dish';
import { isNull } from '../utils/Func';

export class Reception extends BaseElement {
    private _cookersInKitchen: number;
    private _kitchens: Kitchen[] = [];

    constructor(cookersInKitchen: number) {
        super();
        this._cookersInKitchen = cookersInKitchen;
    }

    public get kitchens(): Kitchen[] {
        return this._kitchens;
    }

    public createKitchen(): Kitchen {
        const kitchen = new Kitchen(this._cookersInKitchen);
        this._kitchens.push(kitchen);
        return kitchen;
    }

    private getAvailableKitchen(): Kitchen {
        if (this._kitchens.length === 0) {
            console.log('No kitchen, create one');
            return this.createKitchen();
        }

        const kitchen = this._kitchens.find(k => k.canHandleNewDish());
        if (!isNull(kitchen)) {
            return kitchen;
        }
        console.log('No kitchen available, create new one');
        return this.createKitchen();
    }

    public newDishOrder(dish: Dish): void {
        const kitchen = this.getAvailableKitchen();
        kitchen.prepareNewDish(dish);
    }
}