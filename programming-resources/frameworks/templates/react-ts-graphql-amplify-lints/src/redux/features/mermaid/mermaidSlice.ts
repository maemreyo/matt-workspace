import { MermaidStates } from './types';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const initialState: MermaidStates = {
  autoSync: true,
};

export const mermaidSlice = createSlice({
  name: 'mermaidSlice',
  initialState,
  reducers: {
    toggleAutoSync: (state) => {
      state.autoSync = !state.autoSync;
    },
  },
});

export const { toggleAutoSync } = mermaidSlice.actions;
export const mermaidEditorSelector = (state: RootState) => state.mermaid;
export default mermaidSlice.reducer;
