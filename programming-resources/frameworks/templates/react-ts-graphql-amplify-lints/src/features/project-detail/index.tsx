import { projectSelector } from '../../redux/features/projects/projectsSlice';
import { Box } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ProjectCard } from './components/ProjectCard';
import { ActiveProject } from 'App';

interface IProps {
  activeProjectId: ActiveProject;
}

const ProjectDetail: FC<IProps> = ({ activeProjectId }) => {
  const list = useSelector(projectSelector);

  if (!activeProjectId) {
    return null;
  }

  const activeProject = list.find(
    (project) => project.projectId === activeProjectId
  );

  return (
    <Box className="project-area" sx={{ width: '100%' }}>
      <ProjectCard item={activeProject} />
    </Box>
  );
};

export default ProjectDetail;
