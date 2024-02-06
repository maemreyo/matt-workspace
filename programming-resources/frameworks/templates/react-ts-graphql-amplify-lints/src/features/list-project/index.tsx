import React, { FC, useEffect, useRef } from 'react';
import {
  projectSelector,
  updateProjects,
} from '../../redux/features/projects/projectsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewProject } from './components/AddNewProject';
import { ProjectItem } from './components/ProjectItem';
import ClearAllProjects from './components/ClearAllProjects';
import uuid from 'react-uuid';
import './project-list.scss';
import { ActiveProject } from 'App';
import { doGetProjectsByUserId } from './api';

interface IProps {
  activeProjectId: ActiveProject;
  username: string;
  handleActiveProject: (projectId?: string) => void;
}

const ProjectList: FC<IProps> = ({
  username,
  activeProjectId,
  handleActiveProject,
}) => {
  const dispatch = useDispatch();
  const lastElementRef = useRef<HTMLDivElement>(null);
  const projectList = useSelector(projectSelector);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await doGetProjectsByUserId(username);
      projects && dispatch(updateProjects(projects));
    };
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="project-list">
      <div className="list">
        {projectList.map((project) => (
          <ProjectItem
            key={uuid()}
            item={project}
            username={username}
            activeProjectId={activeProjectId}
            handleActiveProject={handleActiveProject}
          />
        ))}
        <div ref={lastElementRef} />
      </div>
      <div className="control">
        <ClearAllProjects
          username={username}
          handleActiveProject={handleActiveProject}
        />
        <AddNewProject
          username={username}
          handleActiveProject={handleActiveProject}
        />
      </div>
    </div>
  );
};

export default ProjectList;
