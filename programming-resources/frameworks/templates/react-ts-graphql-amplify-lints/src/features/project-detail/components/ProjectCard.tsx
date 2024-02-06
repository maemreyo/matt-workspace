import MermaidPanel from '../../mermaid';
import { FC } from 'react';
import '../projects.scss';
import { Project } from 'API';

interface IProps {
  item?: Project;
}

export const ProjectCard: FC<IProps> = ({ item: projectItem = {} }) => {
  return <MermaidPanel projectId={projectItem.projectId} />;
};
