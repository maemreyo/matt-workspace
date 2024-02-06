import uuid from 'react-uuid';
import { GraphQLQuery } from '@aws-amplify/api';
import {
  CreateProjectInput,
  CreateProjectMutation,
  DeleteProjectInput,
  DeleteProjectMutation,
  ModelSortDirection,
  Project,
  ProjectByUserIdQuery,
  UpdateProjectInput,
  UpdateProjectMutation,
} from 'API';
import { API } from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';
import * as queries from '../../../graphql/queries';

const doAddProject = async (name: string, userId: string) => {
  const projectDetails: CreateProjectInput = {
    name,
    userId,
    projectId: uuid(),
  };
  try {
    const response = await API.graphql<GraphQLQuery<CreateProjectMutation>>({
      query: mutations.createProject,
      variables: { input: projectDetails },
    });
    return response.data?.createProject as Project;
  } catch (error) {
    console.error('Error when creating a project', error);
  }
};

const doUpdateProject = async (id: string, name: string) => {
  const projectDetail: UpdateProjectInput = { id, name };

  try {
    const response = await API.graphql<GraphQLQuery<UpdateProjectMutation>>({
      query: mutations.updateProject,
      variables: { input: projectDetail },
    });
    return response.data?.updateProject as Project;
  } catch (error) {
    console.error('Error when updating project: ', error);
  }
};

const doDeleteProject = async (id: string) => {
  const _id: DeleteProjectInput = { id };

  try {
    const response = await API.graphql<GraphQLQuery<DeleteProjectMutation>>({
      query: mutations.deleteProject,
      variables: { input: _id },
    });
    return response.data?.deleteProject as Project;
  } catch (error) {
    console.error('Error when deleting project: ', error);
  }
};

const doGetProjectsByUserId = async (userId: string) => {
  try {
    const response = await API.graphql<GraphQLQuery<ProjectByUserIdQuery>>({
      query: queries.projectByUserId,
      variables: {
        userId,
        sortDirection: ModelSortDirection.ASC,
      },
    });

    return response.data?.projectByUserId?.items as Project[];
  } catch (error) {
    console.error('Error when fetching projects: ', error);
  }
};

const doDeleteAllProjects = async (userId: string) => {
  const projects = await doGetProjectsByUserId(userId);

  if (projects) {
    projects.forEach((project) => doDeleteProject(project.id));
  }
};

export {
  doAddProject,
  doUpdateProject,
  doDeleteProject,
  doGetProjectsByUserId,
  doDeleteAllProjects,
};
