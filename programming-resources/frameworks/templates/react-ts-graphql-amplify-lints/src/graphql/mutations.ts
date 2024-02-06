/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      projects {
        id
        name
        userId
        projectId
        mermaid {
          id
          projectId
          content
          createdAt
          updatedAt
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      projects {
        id
        name
        userId
        projectId
        mermaid {
          id
          projectId
          content
          createdAt
          updatedAt
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      projects {
        id
        name
        userId
        projectId
        mermaid {
          id
          projectId
          content
          createdAt
          updatedAt
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      name
      userId
      projectId
      mermaid {
        id
        projectId
        content
        createdAt
        updatedAt
      }
      messages {
        items {
          id
          projectId
          messageId
          role
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      name
      userId
      projectId
      mermaid {
        id
        projectId
        content
        createdAt
        updatedAt
      }
      messages {
        items {
          id
          projectId
          messageId
          role
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      name
      userId
      projectId
      mermaid {
        id
        projectId
        content
        createdAt
        updatedAt
      }
      messages {
        items {
          id
          projectId
          messageId
          role
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      projectId
      messageId
      role
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      projectId
      messageId
      role
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      projectId
      messageId
      role
      content
      createdAt
      updatedAt
    }
  }
`;
export const createMermaid = /* GraphQL */ `
  mutation CreateMermaid(
    $input: CreateMermaidInput!
    $condition: ModelMermaidConditionInput
  ) {
    createMermaid(input: $input, condition: $condition) {
      id
      projectId
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateMermaid = /* GraphQL */ `
  mutation UpdateMermaid(
    $input: UpdateMermaidInput!
    $condition: ModelMermaidConditionInput
  ) {
    updateMermaid(input: $input, condition: $condition) {
      id
      projectId
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteMermaid = /* GraphQL */ `
  mutation DeleteMermaid(
    $input: DeleteMermaidInput!
    $condition: ModelMermaidConditionInput
  ) {
    deleteMermaid(input: $input, condition: $condition) {
      id
      projectId
      content
      createdAt
      updatedAt
    }
  }
`;
