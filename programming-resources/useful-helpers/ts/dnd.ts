import { FilterGroup } from "src/model/PipelineNode";
import { BaseDndData, ItemTypes } from "../components/DnDs/types";
import { findGroupById } from "./find";
import { move, mutate, MutationData, reorder } from "./list";

const isDndAtSamePosition = (
    source: BaseDndData,
    target: BaseDndData
): boolean => {
    const sourceKeys = Object.keys(source);
    const targetKeys = Object.keys(target);

    if (sourceKeys.length !== targetKeys.length) {
        return false;
    }

    for (const sourceKey of sourceKeys) {
        const sourceValue = source[sourceKey];
        const targetValue = target[sourceKey];

        if (sourceValue !== targetValue) {
            return false;
        }
    }

    return true;
};

const mapDndData = (
    index: number,
    itemType: ItemTypes,
    dndItem: string | null = null,
    container: string | null = null
) => ({
    index,
    itemType,
    dndItem,
    container,
});

const moveGroup = (
    list: FilterGroup[],
    source: BaseDndData,
    target: BaseDndData,
    updateList: (list: FilterGroup[]) => void
) => {
    const { container: sourceGroupId, index: sourceIndex } = source;
    const { container: targetGroupId, index: targetIndex } = target;

    // Move around between groups
    if (sourceGroupId === targetGroupId) {
        const updatedGroupList = reorder(list, sourceIndex, targetIndex);
        updateList(updatedGroupList);
    }
    // Move to another group
    else {
        if (!targetGroupId) {
            return;
        }
        const { item: targetGroup, level: targetLevel } = findGroupById(
            list,
            targetGroupId
        );

        if (targetGroup) {
            const mutation: MutationData<FilterGroup> = {
                mutator: mutate,
                updates: {
                    level: targetLevel + 1,
                },
            };

            const {
                sourceList: updatedSourceGroups,
                targetList: updatedTargetSubgroups,
            } = move(
                list,
                targetGroup.subGroups,
                sourceIndex,
                targetIndex,
                mutation
            );
            targetGroup.subGroups = updatedTargetSubgroups;
            updateList(updatedSourceGroups);
        }
    }
};

// subGroup can move around in the parent group, or it can move out of its current group.
// for the case subGroup moves around, we need to change its order
// for the case subGroup moves out of its current group, we need to create a new group and place it at the target index
const moveSubgroup = (
    list: FilterGroup[],
    source: BaseDndData,
    target: BaseDndData,
    updateList: (list: FilterGroup[]) => void
) => {
    const { itemType: targetType } = target;

    switch (targetType) {
        case ItemTypes.Group:
            moveSubgroupToRootGroup(list, source, target, updateList);
            break;
        case ItemTypes.Subgroup:
        case ItemTypes.Clause:
            moveSubgroupAround(list, source, target, updateList);
            break;
        default:
            throw new Error("Not supported target type: " + targetType);
    }
};

const moveSubgroupToRootGroup = (
    list: FilterGroup[],
    source: BaseDndData,
    target: BaseDndData,
    updateList: (list: FilterGroup[]) => void
) => {
    const { container: sourceGroupId, index: sourceIndex } = source;
    const { index: targetIndex } = target;

    if (!sourceGroupId) {
        return;
    }

    const { item: currentGroup } = findGroupById(list, sourceGroupId);

    if (currentGroup) {
        const mutation: MutationData<FilterGroup> = {
            mutator: mutate,
            updates: {
                level: 0,
            },
        };
        const { sourceList: sourceSubGroup, targetList: newRootGroupList } =
            move(
                currentGroup.subGroups,
                list,
                sourceIndex,
                targetIndex,
                mutation
            );

        currentGroup.subGroups = sourceSubGroup;
        list = newRootGroupList;
        updateList(list);
    }
};

const moveSubgroupAround = (
    list: FilterGroup[],
    source: BaseDndData,
    target: BaseDndData,
    updateList: (list: FilterGroup[]) => void
) => {
    const { container: sourceGroupId, index: sourceIndex } = source;
    const { container: targetGroupId, index: targetIndex } = target;

    if (!sourceGroupId || !targetGroupId) {
        return;
    }

    // Move around within the parent group
    if (sourceGroupId === targetGroupId) {
        const { item: currentGroup } = findGroupById(list, targetGroupId);

        if (currentGroup) {
            const updatedSubgroups = reorder(
                currentGroup.subGroups,
                sourceIndex,
                targetIndex
            );
            currentGroup.subGroups = updatedSubgroups;
        }
    }
    // Move to another group
    else {
        const { item: sourceGroup } = findGroupById(list, sourceGroupId);
        const { item: targetGroup, level: targetLevel } = findGroupById(
            list,
            targetGroupId
        );

        if (sourceGroup && targetGroup) {
            const mutation: MutationData<FilterGroup> = {
                mutator: mutate,
                updates: {
                    level: targetLevel + 1,
                },
            };

            const {
                sourceList: updatedSourceSubgroups,
                targetList: updatedTargetSubgroups,
            } = move(
                sourceGroup.subGroups,
                targetGroup.subGroups,
                sourceIndex,
                targetIndex,
                mutation
            );
            sourceGroup.subGroups = updatedSourceSubgroups;
            targetGroup.subGroups = updatedTargetSubgroups;
        }
    }
    updateList(list);
};

// sourceType is always equal to targetType, then this function is to change the order of clause
const moveClause = (
    list: FilterGroup[],
    source: BaseDndData,
    target: BaseDndData,
    updateList: (list: FilterGroup[]) => void
) => {
    const { container: sourceGroupId, index: sourceIndex } = source;
    const { container: targetGroupId, index: targetIndex } = target;

    if (!sourceGroupId || !targetGroupId) {
        return;
    }
    // Move around within the parent group
    if (sourceGroupId === targetGroupId) {
        const { item: currentGroup } = findGroupById(list, targetGroupId);

        if (currentGroup) {
            const updatedClauses = reorder(
                currentGroup.clauses,
                source.index,
                target.index
            );
            currentGroup.clauses = updatedClauses;
        }
    }
    // Move to another group
    else {
        const { item: sourceGroup } = findGroupById(list, sourceGroupId);
        const { item: targetGroup } = findGroupById(list, targetGroupId);

        if (sourceGroup && targetGroup) {
            const {
                sourceList: updatedSourceClauses,
                targetList: updatedTargetClauses,
            } = move(
                sourceGroup.clauses,
                targetGroup.clauses,
                sourceIndex,
                targetIndex
            );
            sourceGroup.clauses = updatedSourceClauses;
            targetGroup.clauses = updatedTargetClauses;
        }
    }
    updateList(list);
};

export { mapDndData, moveGroup, moveSubgroup, moveClause, isDndAtSamePosition };
