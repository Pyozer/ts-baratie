import { Kitchen } from './Kitchen';
import { BaseElement } from './BaseElement';
import { Dish } from './Dish/Dish';
import { isNull, remove } from '../utils/Func';

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

    private getAvailableKitchen(dish: Dish): Kitchen {
        if (this._kitchens.length === 0) {
            console.log('No kitchen, create one');
            this.createKitchen();
        }

        const kitchen = this._kitchens.find(k => k.canHandleNewDish(dish));
        if (!isNull(kitchen)) {
            return kitchen;
        }
        console.log('No kitchen available, create new one');
        return this.createKitchen();
    }

    public newDishOrder(dish: Dish): void {
        const kitchen = this.getAvailableKitchen(dish);
        kitchen.prepareNewDish(dish, () => {
            setTimeout(() => {
                if (kitchen.dishes.length > 0) return;
                
                if (remove(this._kitchens, kitchen)) {
                    console.log(`Kitchen #${kitchen.id} closed`);
                }
            }, 5000);
        });
    }

    public displayStatus(): void {
        console.log(`Reception is managing ${this.kitchens.length} kitchen(s)`);
        this.kitchens.forEach((k) => k.displayStatus());
    }
}