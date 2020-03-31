import { ReceptionManager } from './../ReceptionManager';

export const setTimer = (time: number, callback: () => void): void => {    
    setTimeout(callback, 1000 * time * ReceptionManager.settings.cookingTime);
};