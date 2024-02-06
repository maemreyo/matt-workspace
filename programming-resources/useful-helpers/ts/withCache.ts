type Cache<T> = Record<string, T>;

export const withCache = <T extends (...args: any[]) => any>(fn: T): T => {
    const cache: Cache<ReturnType<T>> = {};

    return ((...args: Parameters<T>): ReturnType<T> => {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        return result;
    }) as T;
};
