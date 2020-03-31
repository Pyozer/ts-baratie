import { Kitchen } from './Kitchen';
import { ReceptionManager } from './../ReceptionManager';
import { isNull } from '../utils/Func';
import { Ingredient } from './Ingredient';

export class KitchenStock {
    private stock: Map<Ingredient, number> = new Map();

    constructor(kitchen: Kitchen) {
        this.fillStock(5);
        setTimeout(() => {
            console.log(`Stock of kitchen #${kitchen.id} is filling...`);
            this.fillStock(1);
        }, ReceptionManager.settings.stockInterval);
    }

    public hasInStock(ingredient: Ingredient, qtyNeed: number): boolean {
        const qtyInStock = this.stock.get(ingredient);

        return !isNull(qtyInStock) && qtyInStock >= qtyNeed;
    }

    public takeInStock(ingredient: Ingredient, qty: number): void {
        this.stock.set(ingredient, this.stock.get(ingredient) - qty);
    }

    public addInStock(ingredient: Ingredient, qty: number): void {
        this.stock.set(ingredient, (this.stock.get(ingredient) ?? 0) + qty);
    }

    public fillStock(qty: number): void {
        this.addInStock(Ingredient.Chicken, qty);
        this.addInStock(Ingredient.Chocolate, qty);
        this.addInStock(Ingredient.Dough, qty);
        this.addInStock(Ingredient.Eggs, qty);
        this.addInStock(Ingredient.Matcha, qty);
        this.addInStock(Ingredient.Noodle, qty);
        this.addInStock(Ingredient.Octopus, qty);
        this.addInStock(Ingredient.Pork, qty);
        this.addInStock(Ingredient.Rice, qty);
        this.addInStock(Ingredient.Soja, qty);
    }

    public displayStatus(): void {
        console.log('Stock status: ');
        for(const [ingredient, qty] of this.stock) {
            console.log(`${ingredient}: ${qty}`);
        }
    }
}