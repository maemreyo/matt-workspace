import React, { FC } from 'react';
import { Button } from '@mui/material';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { doDeleteAllProjects } from '../api';
import { useDispatch } from 'react-redux';
import { deleteAllProjects } from '../../../redux/features/projects/projectsSlice';

interface IProps {
  username: string;
  handleActiveProject: (projectId?: string) => void;
}

const ClearAllProjects: FC<IProps> = ({ username, handleActiveProject }) => {
  const dispatch = useDispatch();

  const handleClearAllProjects = async () => {
    await doDeleteAllProjects(username);
    dispatch(deleteAllProjects());
    handleActiveProject();
  };

  return (
    <Button
      className="clear-all-project"
      variant="outlined"
      startIcon={<DeleteSweepIcon fontSize="large" />}
      onClick={handleClearAllProjects}
    >
      Clear All Projects
    </Button>
  );
};

export default ClearAllProjects;
