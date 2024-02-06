/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateMermaid = /* GraphQL */ `
  subscription OnCreateMermaid($filter: ModelSubscriptionMermaidFilterInput) {
    onCreateMermaid(filter: $filter) {
      id
      projectId
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMermaid = /* GraphQL */ `
  subscription OnUpdateMermaid($filter: ModelSubscriptionMermaidFilterInput) {
    onUpdateMermaid(filter: $filter) {
      id
      projectId
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMermaid = /* GraphQL */ `
  subscription OnDeleteMermaid($filter: ModelSubscriptionMermaidFilterInput) {
    onDeleteMermaid(filter: $filter) {
      id
      projectId
      content
      createdAt
      updatedAt
    }
  }
`;
