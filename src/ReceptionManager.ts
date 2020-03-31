import { Reception } from './models/Reception';
import { isNull } from './utils/Func';

type ReceptionManagerSettings = {
    cookingTime: number;
    cookerNumber: number;
    stockInterval: number;
};

export class ReceptionManager {
    private static instance: ReceptionManager;
    public static settings: ReceptionManagerSettings;

    private _reception: Reception;

    private constructor() {
        this._reception = new Reception(ReceptionManager.settings.cookerNumber);
    }

    public static getInstance(): ReceptionManager {
        if (isNull(ReceptionManager.instance)) {
            ReceptionManager.instance = new ReceptionManager();
        }
        return ReceptionManager.instance;
    }

    public get reception(): Reception {
        return this._reception;
    }
}