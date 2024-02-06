export type MutationUpdates<T> = { [K in keyof T]?: T[K] };

export type MutationData<T> = {
    mutator: (item: T, updates: MutationUpdates<T>) => void;
    updates: MutationUpdates<T>;
};

/**
 * Re-order the list
 * @param list the source list
 * @param sourceIndex the start index
 * @param targetIndex the end index
 * @returns the new source list
 */
const reorder = <T>(
    list: T[],
    sourceIndex: number,
    targetIndex: number
): T[] => {
    const result = Array.from(list);
    const [removed] = result.splice(sourceIndex, 1);
    result.splice(targetIndex, 0, removed);

    return result;
};

/**
 * Move an item from the source list to the target list with a mutator applied.
 * @param sourceList The source list
 * @param targetList The target list
 * @param sourceIndex The source index
 * @param targetIndex The target index
 * @param mutation Function to transform the moved item with updates
 * @returns the new source list and target list
 */
const move = <T>(
    sourceList: T[],
    targetList: T[],
    sourceIndex: number,
    targetIndex: number,
    mutation?: MutationData<T> | null
) => {
    const _sourceList = Array.from(sourceList);
    const _targetList = Array.from(targetList);
    const [removed] = _sourceList.splice(sourceIndex, 1);

    if (mutation) {
        mutation.mutator(removed, mutation.updates);
    }

    _targetList.splice(targetIndex, 0, removed);

    return { sourceList: _sourceList, targetList: _targetList };
};

/**
 * Mutate the item with its keys.
 * @param item the item needed to be mutated
 * @param updates all the data needed to be updated. It will be formatted in [key, value] pairs.
 */
const mutate = <T>(item: T, updates: MutationUpdates<T>) => {
    for (const key in updates) {
        if (updates.hasOwnProperty(key)) {
            item[key] = updates[key]!;
        }
    }
};

export { reorder, move, mutate };
