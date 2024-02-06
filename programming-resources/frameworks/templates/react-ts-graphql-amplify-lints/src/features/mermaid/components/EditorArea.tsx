import React, { FC } from 'react';
import EditorInput from './EditorInput';

interface IProps {
  projectId?: string;
}

const EditorArea: FC<IProps> = ({ projectId = '' }) => {
  return (
    <div className="editor-area">
      <EditorInput projectId={projectId} />
    </div>
  );
};

export default EditorArea;
