import { ReceptionManager } from './ReceptionManager';
import { handleCommand, Command, HELP_TEXT } from './utils/CommandHandler';
import boxen from 'boxen';
import prompts from 'prompts';
import { DishFactory } from './factory/DishFactory';
import { Dish } from './models/Dish/Dish';

export const onMaster = async (cookingTime: number, cookerNumber: number, stockInterval: number): Promise<void> => {
    console.log(boxen('Welcome in Baratie Restaurant :)', { padding: 1 }));

    ReceptionManager.settings = {
        cookingTime,
        cookerNumber,
        stockInterval
    };

    let shouldExit = false;

    while (shouldExit !== true) {
        const response = await prompts({
            type: 'text',
            name: 'command',
            message: 'Command:'
        });

        const cmds = handleCommand(response.command);

        for (const { type, args } of cmds) {
            if (type === Command.EXIT) {
                shouldExit = true;
            } else if (type === Command.HELP) {
                console.log(boxen(HELP_TEXT, { padding: 1 }));
            } else if (type === Command.DISH) {
                const dish: Dish = DishFactory.create(args[0], args[1]);
                const qty = parseInt(args[2]);

                for (let i = 0; i < qty; i++) {
                    console.log('Launch prepare dish');
                    
                    ReceptionManager.getInstance()
                        .reception
                        .newDishOrder(dish);
                }
            }
        }
    }

    console.log(boxen('Bye bye !', { padding: 1 }));
    process.exit();
};