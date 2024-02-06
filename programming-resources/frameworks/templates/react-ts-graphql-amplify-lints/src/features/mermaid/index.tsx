import { FC } from 'react';
import './mermaid.scss';

import DiagramArea from './components/DiagramArea';
import EditorArea from './components/EditorArea';
import { Box } from '@mui/material';
import { MessageArea } from './components/MessageArea';
import AutoSync from './components/AutoSync';

interface IProps {
  projectId?: string;
}

const MermaidPanel: FC<IProps> = ({ projectId = '' }) => {
  return (
    <Box className="mermaid-panel">
      <div className="left">
        <div className="top-bar">
          <div className="top-bar-item diagram-item">Diagram 1</div>
          <AutoSync />
        </div>
        <EditorArea projectId={projectId} />
        <MessageArea projectId={projectId} />
      </div>
      <div className="right">
        <div className="top-bar">
          <div className="top-bar-item diagram-item">Diagram</div>
        </div>
        <DiagramArea projectId={projectId} />
      </div>
    </Box>
  );
};

export default MermaidPanel;
