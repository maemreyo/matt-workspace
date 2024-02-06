/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projects {
          id
          name
          userId
          projectId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getMermaid = /* GraphQL */ `
  query GetMermaid($id: ID!) {
    getMermaid(id: $id) {
      id
      projectId
      content
      createdAt
      updatedAt
    }
  }
`;
export const listMermaids = /* GraphQL */ `
  query ListMermaids(
    $filter: ModelMermaidFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMermaids(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectId
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const projectByUserId = /* GraphQL */ `
  query ProjectByUserId(
    $userId: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectByUserId(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const messagesByProjectIdAndCreatedAt = /* GraphQL */ `
  query MessagesByProjectIdAndCreatedAt(
    $projectId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByProjectIdAndCreatedAt(
      projectId: $projectId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const mermaidsByProjectId = /* GraphQL */ `
  query MermaidsByProjectId(
    $projectId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMermaidFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mermaidsByProjectId(
      projectId: $projectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectId
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
