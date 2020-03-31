import { DishSize, Dish } from '../models/Dish/Dish';
import { Takoyaki } from '../models/Dish/Takoyaki';
import { Katsudon } from '../models/Dish/Katsudon';
import { MatchaCookie } from '../models/Dish/MatchaCookie';
import { Ramen } from '../models/Dish/Ramen';
import { Udon } from '../models/Dish/Udon';

export class DishFactory {

    public static create(type: string, size: string): Dish {
        const dishSize = DishFactory.dishSizeFromString(size);

        if (type === 'takoyaki') return new Takoyaki(dishSize);
        if (type === 'katsudon') return new Katsudon(dishSize);
        if (type === 'matchacookie') return new MatchaCookie(dishSize);
        if (type === 'ramen') return new Ramen(dishSize);
        if (type === 'udon') return new Udon(dishSize);
        throw 'unknown_dish';
    }

    private static dishSizeFromString(size: string): DishSize {
        if (size === 's') return DishSize.S;
        if (size === 'm') return DishSize.M;
        if (size === 'l') return DishSize.L;
        if (size === 'xl') return DishSize.XL;
        if (size === 'xxl') return DishSize.XXL;
        throw 'unknown_dish_size';
    }

    public static dishSizeToString(size: DishSize): string {
        if (size === DishSize.S) return 'S';
        if (size === DishSize.M) return 'M';
        if (size === DishSize.L) return 'L';
        if (size === DishSize.XL) return 'XL';
        if (size === DishSize.XXL) return 'XXL';
        throw 'unknown_dish_size';
    }
}