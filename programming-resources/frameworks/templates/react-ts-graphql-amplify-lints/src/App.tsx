import { FC, useState } from 'react';
import {
  withAuthenticator,
  WithAuthenticatorProps,
} from '@aws-amplify/ui-react';
import { Toaster } from 'react-hot-toast';
import ProjectList from './features/list-project';
import ProjectDetail from './features/project-detail';
import './root.scss';
import uuid from 'react-uuid';

export type ActiveProject = string | null;

const App: FC<WithAuthenticatorProps> = ({ signOut, user }) => {
  const [activeProject, setActiveProject] = useState<ActiveProject>(null);

  const handleActiveProject = (projectId?: string) => {
    if (!projectId) {
      setActiveProject(null);
      return;
    }
    setActiveProject(projectId);
  };
  return (
    <>
      <div className="app">
        <ProjectList
          activeProjectId={activeProject}
          username={user?.username || uuid()}
          handleActiveProject={handleActiveProject}
        />
        <ProjectDetail activeProjectId={activeProject} />
      </div>
      <Toaster />
    </>
  );
};

export default withAuthenticator(App);
