import { Mermaid, Message, Project } from 'API';

// export interface IMessage {
//   id?: string,
//   role?: string | null,
//   content?: string | null,
//   createdAt?: string,
//   updatedAt?: string,
// }

// export interface IProject {
//   id: string;
//   name: string;
// }

// export interface IMermaid {
//   projectId: string;
//   mermaidSyntax: string;
// }

export interface ProjectsState {
  list: Project[];
}
