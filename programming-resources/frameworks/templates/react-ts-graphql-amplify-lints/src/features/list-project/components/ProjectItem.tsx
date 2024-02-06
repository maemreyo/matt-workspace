import React, { FC, useRef, useState } from 'react';
import {
  InputBase,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import {
  deleteProject,
  editProject,
} from '../../../redux/features/projects/projectsSlice';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { ActiveProject } from 'App';
import { Project } from 'API';
import { doDeleteProject, doUpdateProject } from '../api';

interface IProps {
  item: Project;
  username?: string;
  activeProjectId: ActiveProject;
  handleActiveProject: (projectId?: string) => void;
}

export const ProjectItem: FC<IProps> = ({
  item: projectItem,
  username,
  activeProjectId,
  handleActiveProject,
}) => {
  const inputProjectRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleDeleteProject = async (projectId: string) => {
    if (projectId === activeProjectId) {
      handleActiveProject();
    }

    //! Do call API to delete project
    const deletedProject = await doDeleteProject(projectItem.id);

    // Update the local state after deleting the project
    deletedProject &&
      dispatch(deleteProject({ projectId: deletedProject.projectId }));
  };

  const handleAcceptEditProject = async (projectId: string) => {
    setIsEditing(false);

    const rawInput = inputProjectRef.current;
    if (rawInput) {
      //! Do call API to update the project
      const updatedProject = await doUpdateProject(
        projectItem.id,
        rawInput.value
      );

      // Update the local state after updating the project
      updatedProject &&
        dispatch(
          editProject({
            projectId: updatedProject.projectId,
            changes: { name: updatedProject.name },
          })
        );
    }
  };

  return (
    <ListItem
      className="project-item"
      secondaryAction={
        <div className="control">
          {!isEditing ? (
            <>
              <div onClick={() => setIsEditing(true)}>
                <ModeEditIcon className="icon edit" fontSize="small" />
              </div>
              <div onClick={() => handleDeleteProject(projectItem.projectId)}>
                <DeleteIcon className="icon delete" fontSize="small" />
              </div>
            </>
          ) : (
            <>
              <div
                onClick={() => handleAcceptEditProject(projectItem.projectId)}
              >
                <DoneIcon className="icon done" fontSize="small" />
              </div>
              <div onClick={() => setIsEditing(false)}>
                <CloseIcon className="icon close" fontSize="small" />
              </div>
            </>
          )}
        </div>
      }
    >
      <div
        className="content"
        onClick={() => handleActiveProject(projectItem.projectId)}
      >
        <ListItemButton className="button">
          <ChatBubbleOutlineIcon className="icon chat" fontSize="small" />
          {!isEditing ? (
            <ListItemText className="name" primary={projectItem.name} />
          ) : (
            <InputBase
              className="name"
              defaultValue={projectItem.name}
              inputRef={inputProjectRef}
              autoFocus
            />
          )}
        </ListItemButton>
      </div>
    </ListItem>
  );
};
