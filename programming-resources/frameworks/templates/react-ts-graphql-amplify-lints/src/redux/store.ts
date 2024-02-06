import { configureStore } from '@reduxjs/toolkit';
import mermaidSlice from './features/mermaid/mermaidSlice';
import projectsSlice from './features/projects/projectsSlice';

export const store = configureStore({
  reducer: {
    projects: projectsSlice,
    mermaid: mermaidSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
