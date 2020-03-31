import { DishFactory } from './../../factory/DishFactory';
import { BaseElement } from '../BaseElement';
import { Ingredient } from '../Ingredient';

export enum DishSize {
    S = 1,
    M = 2,
    L = 4,
    XL = 8,
    XXL = 16
}

export enum DishStatus {
    WAITING,
    IN_PROGRESS,
    DONE
}

export type Ingredients = Map<Ingredient, number>;

export abstract class Dish extends BaseElement {
    private _name: string;
    private _size: DishSize;
    public _ingredients: Ingredients;
    private _bakeTime: number;
    private _status: DishStatus;

    constructor(name: string, size: DishSize, ingredients: Ingredients, bakeTime: number, status = DishStatus.WAITING) {
        super();
        this._name = name;
        this._size = size;
        this._ingredients = ingredients;
        this._bakeTime = bakeTime;
        this._status = status;
    }

    public get name(): string { return this._name; }
    public get size(): DishSize { return this._size; }
    public get sizeStr(): string { return DishFactory.dishSizeToString(this.size); }
    public get status(): DishStatus { return this._status; }
    public get ingredients(): Ingredients { return this._ingredients; }
    public get bakeTime(): number { return this._bakeTime; }

    public startPreparing(): void {
        console.log(`Dish #${this.id} ${this.name} ${this.sizeStr} begins to be prepared...`);
        this._status = DishStatus.IN_PROGRESS;
    }

    public donePreparing(): void {
        console.log(`Dish #${this.id} ${this.name} ${this.sizeStr} is finish !`);
        this._status = DishStatus.DONE;
    }
}