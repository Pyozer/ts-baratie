// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isNull = (...args: any): boolean => {
    for (const elem of args) {
        if (elem === null || elem === undefined) return true;
    }
    return false;
};

export type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]?: U;
};
