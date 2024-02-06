import { FilterClause, FilterGroup } from "src/model/PipelineNode";
import {
    checkIfTargetEmptyGroup,
    findGroupById,
    findPathToEmptyGroup,
} from "./find";

export type UpdateGroupsFn = (groups: FilterGroup[]) => void;

const updateConjunction =
    (groups: FilterGroup[]) =>
    (updateGroups: UpdateGroupsFn) =>
    (targetGroupId: string, updatedValue: string) => {
        const _groups = [...groups];
        const { item: curGroup } = findGroupById(_groups, targetGroupId);
        if (curGroup) {
            curGroup.conjunction = updatedValue;
        }
        updateGroups(_groups);
    };

const addGroup =
    (groups: FilterGroup[]) =>
    (updateGroups: UpdateGroupsFn) =>
    (targetGroupId: string, newGroup: FilterGroup) => {
        let _groups = [...groups];
        const { item: currentGroup } = findGroupById(_groups, targetGroupId);
        if (currentGroup) {
            currentGroup.subGroups.push(newGroup);
        }
        updateGroups(_groups);
    };

const addClause =
    (groups: FilterGroup[]) =>
    (updateGroups: UpdateGroupsFn) =>
    (targetGroupId: string, newClause: FilterClause) => {
        let _groups = [...groups];
        const { item: curGroup } = findGroupById(_groups, targetGroupId);
        if (curGroup) {
            curGroup.clauses.push(newClause);
        }
        updateGroups(_groups);
    };

const deleteClause =
    (groups: FilterGroup[]) =>
    (updateGroups: UpdateGroupsFn) =>
    (targetGroupId: string, targetClauseId: string) => {
        let _group = [...groups];
        const { item: curGroup, level } = findGroupById(_group, targetGroupId);

        if (!curGroup) {
            return;
        }

        // Can not delete the root group with only one condition
        const isRootGroup = level === 0;
        const isHaveOnlyOneClause = curGroup.clauses.length === 1;
        const isHaveSubGroups = curGroup.subGroups.length > 0;
        if (
            (isRootGroup && isHaveOnlyOneClause) ||
            (!isRootGroup && isHaveSubGroups && isHaveOnlyOneClause)
        ) {
            return;
        }

        // Delete the clause
        let deleteIndex = curGroup.clauses.findIndex(
            (clause) => clause.id === targetClauseId
        );

        curGroup.clauses.splice(deleteIndex, 1);

        updateGroups(_group);

        // Check if the group is empty (no subgroups and no clauses), then delete the group
        const isEmptyGroup = checkIfTargetEmptyGroup(curGroup);
        if (isEmptyGroup) {
            const path = findPathToEmptyGroup(_group, targetGroupId);
            if (path) {
                deleteGroup(groups)(updateGroups)(path, targetGroupId);
            }
        }
    };

const deleteGroup =
    (groups: FilterGroup[]) =>
    (updateGroups: UpdateGroupsFn) =>
    (path: string[], targetGroupId: string) => {
        let _group = [...groups];
        const childIndex = path.findIndex((id) => id === targetGroupId);
        const parentIndex = childIndex - 1;
        const parentGroupId = path[parentIndex];
        const { item: parentGroup } = findGroupById(_group, parentGroupId);

        if (parentGroup) {
            // Delete the clause
            let deleteIndex = parentGroup.subGroups.findIndex(
                (group) => group.id === targetGroupId
            );
            parentGroup.subGroups.splice(deleteIndex, 1);
        }

        updateGroups(_group);
    };

const updateFilterClause = (
    groups: FilterGroup[],
    clauseId: string,
    newClause: FilterClause
): FilterGroup[] => {
    const updatedGroups = groups.map((group) => {
        const updatedClauses = group.clauses.map((clause) => {
            if (clause.id === clauseId) {
                return newClause;
            } else {
                return clause;
            }
        });
        const updatedSubGroups = updateFilterClause(
            group.subGroups,
            clauseId,
            newClause
        );
        return new FilterGroup(
            group.conjunction,
            group.id,
            group.level,
            updatedClauses,
            updatedSubGroups
        );
    });
    return updatedGroups;
};

export {
    updateConjunction,
    addGroup,
    addClause,
    deleteClause,
    updateFilterClause,
};
