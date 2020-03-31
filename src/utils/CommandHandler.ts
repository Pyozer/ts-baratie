export enum Command {
    EXIT,
    HELP,
    STATUS,
    DISH
}

type CommandResponse = {
    type: Command;
    args?: string[];
};

export const handleCommand = (input: string): CommandResponse[] => {
    const commands = input.trim().split(';').map(cmd => cmd.trim());

    if (commands.length === 0) throw 'unknown_command';

    if (commands.length >= 2) {
        return commands.map(cmd => handleCommand(cmd)).flat();
    }

    const cmd = commands[0].toLowerCase();
    if (cmd === 'exit') {
        return [{ type: Command.EXIT }];
    }
    if (cmd === 'help') {
        return [{ type: Command.HELP }];
    }
    if (cmd === 'status') {
        return [{ type: Command.STATUS }];
    }

    const cmdDishMatch = cmd.match(/([a-z]+) ([a-z]+) x([0-9]+)/);
    if (cmdDishMatch.length > 3) {
        return [{ type: Command.DISH, args: [cmdDishMatch[1], cmdDishMatch[2], cmdDishMatch[3]] }];
    }

    throw 'unknown_command';
};

export const HELP_TEXT = `Commands:

> help                                Show possible commands
> status                              Display status of each kitchen
> <dishtype> <dishsize> x<quantity>   Ask reception to prepare a dish
> exit                                Exit program

Dish type availables:
- Takoyaki, Katsudon, Udon, Ramen, MatchaCookie

Dish size availables:
- S, M, L, XL, XXL 

Examples
> Takoyaki XL x3
> Katsudon S x5; MatchaCookie XXL x2`;