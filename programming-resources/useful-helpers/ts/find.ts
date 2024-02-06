import { FilterGroup } from "src/model/PipelineNode";
import { withCache } from "./withCache";

type FindResult<T> = {
    item: T | null;
    level: number;
    parentGroupId: string | null;
};

const findGroupById = withCache(
    <T extends FilterGroup>(
        groups: FilterGroup[],
        targetGroupId: string
    ): FindResult<T> => {
        const search = (groups: FilterGroup[], level = 0): FindResult<T> => {
            const found = groups.find((group) => group.id === targetGroupId);
            if (found) {
                return { item: found as T, level, parentGroupId: "" };
            }
            for (const group of groups) {
                if (group.subGroups) {
                    const subGroupResult = search(group.subGroups, level + 1);

                    if (subGroupResult.item) {
                        return {
                            ...subGroupResult,
                            level: subGroupResult.level,
                            parentGroupId: group.id,
                        };
                    }
                }
            }
            return { item: null, level: -1, parentGroupId: "" };
        };

        return search(groups);
    }
);

const findPathToEmptyGroup = withCache(
    (
        groups: FilterGroup[],
        targetGroupId: string,
        path: string[] = []
    ): string[] | undefined => {
        for (const group of groups) {
            const newPath = [...path, group.id];

            if (group.id === targetGroupId) {
                return newPath;
            } else if (group.subGroups.length > 0) {
                const subGroupPath = findPathToEmptyGroup(
                    group.subGroups,
                    targetGroupId,
                    newPath
                );
                if (subGroupPath !== undefined) {
                    return subGroupPath;
                }
            }
        }
        return undefined;
    }
);

const checkIfTargetEmptyGroup = (group: FilterGroup): boolean =>
    group.subGroups.length === 0 && group.clauses.length === 0;

export { findGroupById, findPathToEmptyGroup, checkIfTargetEmptyGroup };
