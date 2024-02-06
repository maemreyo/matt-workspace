/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null;
};

export type ModelUserConditionInput = {
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type User = {
  __typename: 'User';
  id: string;
  projects?: Array<Project> | null;
  createdAt: string;
  updatedAt: string;
};

export type Project = {
  __typename: 'Project';
  id: string;
  name: string;
  userId: string;
  projectId: string;
  mermaid?: Mermaid | null;
  messages?: ModelMessageConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type Mermaid = {
  __typename: 'Mermaid';
  id: string;
  projectId: string;
  content?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelMessageConnection = {
  __typename: 'ModelMessageConnection';
  items: Array<Message | null>;
  nextToken?: string | null;
};

export type Message = {
  __typename: 'Message';
  id: string;
  projectId: string;
  messageId: string;
  role: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserInput = {
  id: string;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateProjectInput = {
  id?: string | null;
  name: string;
  userId: string;
  projectId: string;
  createdAt?: string | null;
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null;
  userId?: ModelStringInput | null;
  projectId?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelProjectConditionInput | null> | null;
  or?: Array<ModelProjectConditionInput | null> | null;
  not?: ModelProjectConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateProjectInput = {
  id: string;
  name?: string | null;
  userId?: string | null;
  projectId?: string | null;
  createdAt?: string | null;
};

export type DeleteProjectInput = {
  id: string;
};

export type CreateMessageInput = {
  id?: string | null;
  projectId: string;
  messageId: string;
  role: string;
  content: string;
  createdAt?: string | null;
};

export type ModelMessageConditionInput = {
  projectId?: ModelIDInput | null;
  messageId?: ModelStringInput | null;
  role?: ModelStringInput | null;
  content?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelMessageConditionInput | null> | null;
  or?: Array<ModelMessageConditionInput | null> | null;
  not?: ModelMessageConditionInput | null;
};

export type UpdateMessageInput = {
  id: string;
  projectId?: string | null;
  messageId?: string | null;
  role?: string | null;
  content?: string | null;
  createdAt?: string | null;
};

export type DeleteMessageInput = {
  id: string;
};

export type CreateMermaidInput = {
  id?: string | null;
  projectId: string;
  content?: string | null;
};

export type ModelMermaidConditionInput = {
  projectId?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelMermaidConditionInput | null> | null;
  or?: Array<ModelMermaidConditionInput | null> | null;
  not?: ModelMermaidConditionInput | null;
};

export type UpdateMermaidInput = {
  id: string;
  projectId?: string | null;
  content?: string | null;
};

export type DeleteMermaidInput = {
  id: string;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: 'ModelUserConnection';
  items: Array<User | null>;
  nextToken?: string | null;
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  userId?: ModelStringInput | null;
  projectId?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelProjectFilterInput | null> | null;
  or?: Array<ModelProjectFilterInput | null> | null;
  not?: ModelProjectFilterInput | null;
};

export type ModelProjectConnection = {
  __typename: 'ModelProjectConnection';
  items: Array<Project | null>;
  nextToken?: string | null;
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null;
  projectId?: ModelIDInput | null;
  messageId?: ModelStringInput | null;
  role?: ModelStringInput | null;
  content?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
};

export type ModelMermaidFilterInput = {
  id?: ModelIDInput | null;
  projectId?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelMermaidFilterInput | null> | null;
  or?: Array<ModelMermaidFilterInput | null> | null;
  not?: ModelMermaidFilterInput | null;
};

export type ModelMermaidConnection = {
  __typename: 'ModelMermaidConnection';
  items: Array<Mermaid | null>;
  nextToken?: string | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionProjectFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  userId?: ModelSubscriptionStringInput | null;
  projectId?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionProjectFilterInput | null> | null;
  or?: Array<ModelSubscriptionProjectFilterInput | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  projectId?: ModelSubscriptionIDInput | null;
  messageId?: ModelSubscriptionStringInput | null;
  role?: ModelSubscriptionStringInput | null;
  content?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionMessageFilterInput | null> | null;
  or?: Array<ModelSubscriptionMessageFilterInput | null> | null;
};

export type ModelSubscriptionMermaidFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  projectId?: ModelSubscriptionIDInput | null;
  content?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionMermaidFilterInput | null> | null;
  or?: Array<ModelSubscriptionMermaidFilterInput | null> | null;
};

export type CreateUserMutationVariables = {
  input: CreateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type CreateUserMutation = {
  createUser?: {
    __typename: 'User';
    id: string;
    projects?: Array<{
      __typename: 'Project';
      id: string;
      name: string;
      userId: string;
      projectId: string;
      mermaid?: {
        __typename: 'Mermaid';
        id: string;
        projectId: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type UpdateUserMutation = {
  updateUser?: {
    __typename: 'User';
    id: string;
    projects?: Array<{
      __typename: 'Project';
      id: string;
      name: string;
      userId: string;
      projectId: string;
      mermaid?: {
        __typename: 'Mermaid';
        id: string;
        projectId: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput;
  condition?: ModelUserConditionInput | null;
};

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: 'User';
    id: string;
    projects?: Array<{
      __typename: 'Project';
      id: string;
      name: string;
      userId: string;
      projectId: string;
      mermaid?: {
        __typename: 'Mermaid';
        id: string;
        projectId: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput;
  condition?: ModelProjectConditionInput | null;
};

export type CreateProjectMutation = {
  createProject?: {
    __typename: 'Project';
    id: string;
    name: string;
    userId: string;
    projectId: string;
    mermaid?: {
      __typename: 'Mermaid';
      id: string;
      projectId: string;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        projectId: string;
        messageId: string;
        role: string;
        content: string;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput;
  condition?: ModelProjectConditionInput | null;
};

export type UpdateProjectMutation = {
  updateProject?: {
    __typename: 'Project';
    id: string;
    name: string;
    userId: string;
    projectId: string;
    mermaid?: {
      __typename: 'Mermaid';
      id: string;
      projectId: string;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        projectId: string;
        messageId: string;
        role: string;
        content: string;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput;
  condition?: ModelProjectConditionInput | null;
};

export type DeleteProjectMutation = {
  deleteProject?: {
    __typename: 'Project';
    id: string;
    name: string;
    userId: string;
    projectId: string;
    mermaid?: {
      __typename: 'Mermaid';
      id: string;
      projectId: string;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        projectId: string;
        messageId: string;
        role: string;
        content: string;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput;
  condition?: ModelMessageConditionInput | null;
};

export type CreateMessageMutation = {
  createMessage?: {
    __typename: 'Message';
    id: string;
    projectId: string;
    messageId: string;
    role: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput;
  condition?: ModelMessageConditionInput | null;
};

export type UpdateMessageMutation = {
  updateMessage?: {
    __typename: 'Message';
    id: string;
    projectId: string;
    messageId: string;
    role: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput;
  condition?: ModelMessageConditionInput | null;
};

export type DeleteMessageMutation = {
  deleteMessage?: {
    __typename: 'Message';
    id: string;
    projectId: string;
    messageId: string;
    role: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateMermaidMutationVariables = {
  input: CreateMermaidInput;
  condition?: ModelMermaidConditionInput | null;
};

export type CreateMermaidMutation = {
  createMermaid?: {
    __typename: 'Mermaid';
    id: string;
    projectId: string;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateMermaidMutationVariables = {
  input: UpdateMermaidInput;
  condition?: ModelMermaidConditionInput | null;
};

export type UpdateMermaidMutation = {
  updateMermaid?: {
    __typename: 'Mermaid';
    id: string;
    projectId: string;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteMermaidMutationVariables = {
  input: DeleteMermaidInput;
  condition?: ModelMermaidConditionInput | null;
};

export type DeleteMermaidMutation = {
  deleteMermaid?: {
    __typename: 'Mermaid';
    id: string;
    projectId: string;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type GetUserQueryVariables = {
  id: string;
};

export type GetUserQuery = {
  getUser?: {
    __typename: 'User';
    id: string;
    projects?: Array<{
      __typename: 'Project';
      id: string;
      name: string;
      userId: string;
      projectId: string;
      mermaid?: {
        __typename: 'Mermaid';
        id: string;
        projectId: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: 'ModelUserConnection';
    items: Array<{
      __typename: 'User';
      id: string;
      projects?: Array<{
        __typename: 'Project';
        id: string;
        name: string;
        userId: string;
        projectId: string;
        createdAt: string;
        updatedAt: string;
      }> | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetProjectQueryVariables = {
  id: string;
};

export type GetProjectQuery = {
  getProject?: {
    __typename: 'Project';
    id: string;
    name: string;
    userId: string;
    projectId: string;
    mermaid?: {
      __typename: 'Mermaid';
      id: string;
      projectId: string;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        projectId: string;
        messageId: string;
        role: string;
        content: string;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListProjectsQuery = {
  listProjects?: {
    __typename: 'ModelProjectConnection';
    items: Array<{
      __typename: 'Project';
      id: string;
      name: string;
      userId: string;
      projectId: string;
      mermaid?: {
        __typename: 'Mermaid';
        id: string;
        projectId: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetMessageQueryVariables = {
  id: string;
};

export type GetMessageQuery = {
  getMessage?: {
    __typename: 'Message';
    id: string;
    projectId: string;
    messageId: string;
    role: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListMessagesQuery = {
  listMessages?: {
    __typename: 'ModelMessageConnection';
    items: Array<{
      __typename: 'Message';
      id: string;
      projectId: string;
      messageId: string;
      role: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetMermaidQueryVariables = {
  id: string;
};

export type GetMermaidQuery = {
  getMermaid?: {
    __typename: 'Mermaid';
    id: string;
    projectId: string;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListMermaidsQueryVariables = {
  filter?: ModelMermaidFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListMermaidsQuery = {
  listMermaids?: {
    __typename: 'ModelMermaidConnection';
    items: Array<{
      __typename: 'Mermaid';
      id: string;
      projectId: string;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ProjectByUserIdQueryVariables = {
  userId: string;
  createdAt?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelProjectFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ProjectByUserIdQuery = {
  projectByUserId?: {
    __typename: 'ModelProjectConnection';
    items: Array<{
      __typename: 'Project';
      id: string;
      name: string;
      userId: string;
      projectId: string;
      mermaid?: {
        __typename: 'Mermaid';
        id: string;
        projectId: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type MessagesByProjectIdAndCreatedAtQueryVariables = {
  projectId: string;
  createdAt?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelMessageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type MessagesByProjectIdAndCreatedAtQuery = {
  messagesByProjectIdAndCreatedAt?: {
    __typename: 'ModelMessageConnection';
    items: Array<{
      __typename: 'Message';
      id: string;
      projectId: string;
      messageId: string;
      role: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type MermaidsByProjectIdQueryVariables = {
  projectId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelMermaidFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type MermaidsByProjectIdQuery = {
  mermaidsByProjectId?: {
    __typename: 'ModelMermaidConnection';
    items: Array<{
      __typename: 'Mermaid';
      id: string;
      projectId: string;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
};

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: 'User';
    id: string;
    projects?: Array<{
      __typename: 'Project';
      id: string;
      name: string;
      userId: string;
      projectId: string;
      mermaid?: {
        __typename: 'Mermaid';
        id: string;
        projectId: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
};

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: 'User';
    id: string;
    projects?: Array<{
      __typename: 'Project';
      id: string;
      name: string;
      userId: string;
      projectId: string;
      mermaid?: {
        __typename: 'Mermaid';
        id: string;
        projectId: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
};

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: 'User';
    id: string;
    projects?: Array<{
      __typename: 'Project';
      id: string;
      name: string;
      userId: string;
      projectId: string;
      mermaid?: {
        __typename: 'Mermaid';
        id: string;
        projectId: string;
        content?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    }> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null;
};

export type OnCreateProjectSubscription = {
  onCreateProject?: {
    __typename: 'Project';
    id: string;
    name: string;
    userId: string;
    projectId: string;
    mermaid?: {
      __typename: 'Mermaid';
      id: string;
      projectId: string;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        projectId: string;
        messageId: string;
        role: string;
        content: string;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null;
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?: {
    __typename: 'Project';
    id: string;
    name: string;
    userId: string;
    projectId: string;
    mermaid?: {
      __typename: 'Mermaid';
      id: string;
      projectId: string;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        projectId: string;
        messageId: string;
        role: string;
        content: string;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null;
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?: {
    __typename: 'Project';
    id: string;
    name: string;
    userId: string;
    projectId: string;
    mermaid?: {
      __typename: 'Mermaid';
      id: string;
      projectId: string;
      content?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    messages?: {
      __typename: 'ModelMessageConnection';
      items: Array<{
        __typename: 'Message';
        id: string;
        projectId: string;
        messageId: string;
        role: string;
        content: string;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null;
};

export type OnCreateMessageSubscription = {
  onCreateMessage?: {
    __typename: 'Message';
    id: string;
    projectId: string;
    messageId: string;
    role: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null;
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?: {
    __typename: 'Message';
    id: string;
    projectId: string;
    messageId: string;
    role: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null;
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?: {
    __typename: 'Message';
    id: string;
    projectId: string;
    messageId: string;
    role: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateMermaidSubscriptionVariables = {
  filter?: ModelSubscriptionMermaidFilterInput | null;
};

export type OnCreateMermaidSubscription = {
  onCreateMermaid?: {
    __typename: 'Mermaid';
    id: string;
    projectId: string;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateMermaidSubscriptionVariables = {
  filter?: ModelSubscriptionMermaidFilterInput | null;
};

export type OnUpdateMermaidSubscription = {
  onUpdateMermaid?: {
    __typename: 'Mermaid';
    id: string;
    projectId: string;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteMermaidSubscriptionVariables = {
  filter?: ModelSubscriptionMermaidFilterInput | null;
};

export type OnDeleteMermaidSubscription = {
  onDeleteMermaid?: {
    __typename: 'Mermaid';
    id: string;
    projectId: string;
    content?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};
