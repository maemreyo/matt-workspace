import { Mermaid, ModelMessageConnection } from './../../../API';
import { ProjectsState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Message, Project } from 'API';
import { defaultGuideForChatBot } from 'helpers/chatgpt';

const initialState: ProjectsState = {
  list: [],
};

export const projectsSlice = createSlice({
  name: 'projectsSlice',
  initialState,
  reducers: {
    updateProjects: (state, action: PayloadAction<Project[]>) => {
      state.list = action.payload;
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.list.push(action.payload);
    },
    deleteProject: (state, action: PayloadAction<{ projectId: string }>) => {
      const newList = state.list.filter(
        (project) => project.projectId !== action.payload.projectId
      );
      state.list = newList;
    },
    deleteAllProjects: (state) => {
      state.list.splice(0, state.list.length);
    },
    editProject: (
      state,
      action: PayloadAction<{ projectId: string; changes: Partial<Project> }>
    ) => {
      const project = state.list.find(
        (project) => project.projectId === action.payload.projectId
      );

      if (project) {
        project.name = action.payload.changes.name as string;
      }
    },
    updateMessages: (
      state,
      action: PayloadAction<{
        projectId: string;
        messages: ModelMessageConnection;
      }>
    ) => {
      const project = state.list.find(
        (project) => project.projectId === action.payload.projectId
      );

      if (project) {
        action.payload.messages.items = [
          defaultGuideForChatBot(action.payload.projectId).items[0],
          ...action.payload.messages.items,
        ];
        project.messages = action.payload.messages;
      }
    },
    sendMessage: (
      state,
      action: PayloadAction<{ projectId: string; message: Message }>
    ) => {
      const project = state.list.filter(
        (project) => project.projectId === action.payload.projectId
      )[0];
      if (project.messages) {
        project.messages.items.push(action.payload.message);
      }
    },
    updateDiagramSyntax: (
      state,
      action: PayloadAction<{ projectId: string; mermaid: Mermaid }>
    ) => {
      const project = state.list.find(
        (project) => project.projectId === action.payload.projectId
      );

      if (project) {
        project.mermaid = action.payload.mermaid;
      }
    },
  },
});

export const {
  updateProjects,
  addProject,
  deleteProject,
  deleteAllProjects,
  editProject,
  updateMessages,
  sendMessage,
  updateDiagramSyntax,
} = projectsSlice.actions;
export const projectSelector = (state: RootState) => state.projects.list;
export default projectsSlice.reducer;
