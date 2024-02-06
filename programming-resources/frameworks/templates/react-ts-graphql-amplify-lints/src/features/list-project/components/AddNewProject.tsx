import React, { FC, FormEvent, useCallback, useRef } from 'react';
import { Button, FormControl, Input } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { trim } from '../../../utils/strings';
import { API } from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';
import { GraphQLQuery } from '@aws-amplify/api';
import {
  CreateProjectInput,
  CreateProjectMutation,
  Project,
} from '../../../API';
import { addProject } from '../../../redux/features/projects/projectsSlice';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { doAddProject } from '../api';
interface IProps {
  username: string;
  handleActiveProject: (projectId?: string) => void;
}

export const AddNewProject: FC<IProps> = ({
  username,
  handleActiveProject,
}) => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddProject = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (inputRef.current) {
        const rawInput = inputRef.current.value;
        if (!rawInput) return;

        inputRef.current.value = '';

        //! TODO: Call API to create a new project for an user
        const newProject = await doAddProject(trim(rawInput), username);
        newProject && dispatch(addProject(newProject));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inputRef]
  );

  return (
    <form onSubmit={handleAddProject} className="form-area">
      <FormControl variant="filled" className="form-control">
        <Input
          className="input"
          id="project-input"
          placeholder="Project Name"
          inputRef={inputRef}
          autoComplete="off"
          disableUnderline
        />
        <Button className="submit-button" type="submit">
          <AddCircleOutlineIcon color="secondary" />
        </Button>
      </FormControl>
    </form>
  );
};
