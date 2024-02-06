import { FC, useEffect, useState } from 'react';
import Editor, { OnChange } from '@monaco-editor/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateDiagramSyntax,
  projectSelector,
} from '../../../redux/features/projects/projectsSlice';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import useCopyToClipboard from '../../../utils/hooks/useCopyToClipboard';
import { IconButton, Tooltip } from '@mui/material';
import { notify } from 'helpers/toast';
import { NOTIFY_COPY_TO_CLIPBOARD } from '../../../config/root';
import { mermaidEditorSelector } from '../../../redux/features/mermaid/mermaidSlice';
import { doGetMermaidByProjectId } from '../api';
import { Mermaid } from 'API';
import uuid from 'react-uuid';

interface IProps {
  projectId: string;
}

const EditorInput: FC<IProps> = ({ projectId }) => {
  const dispatch = useDispatch();
  const [inputValue, setSetInputValue] = useState<string>('');
  const [, copy] = useCopyToClipboard();
  const projectList = useSelector(projectSelector);
  const mermaidData = projectList.filter(
    (project) => project.projectId === projectId
  )[0].mermaid;
  const mermaidEditor = useSelector(mermaidEditorSelector);

  useEffect(() => {
    const fetchMermaid = async () => {
      const mermaid = await doGetMermaidByProjectId(projectId);
      mermaid && dispatch(updateDiagramSyntax({ projectId, mermaid }));
    };

    fetchMermaid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSetInputValue(mermaidData?.content || '');
  }, [mermaidData]);

  const handleChange: OnChange = (value = '', _) => {
    if (mermaidEditor.autoSync) {
      let mermaid: Mermaid | null;
      if (mermaidData) {
        mermaid = {
          __typename: 'Mermaid',
          id: mermaidData.id,
          projectId: mermaidData.projectId,
          content: value,
          createdAt: mermaidData.createdAt,
          updatedAt: `${Date.now()}}`,
        };
      } else {
        mermaid = {
          __typename: 'Mermaid',
          id: uuid(),
          projectId,
          content: value,
          createdAt: `${Date.now()}}`,
          updatedAt: `${Date.now()}}`,
        };
      }
      dispatch(updateDiagramSyntax({ projectId, mermaid }));
    }
  };

  const handleCopy = () => {
    copy(inputValue);
    notify(NOTIFY_COPY_TO_CLIPBOARD);
  };

  return (
    <>
      <Editor
        className="editor-mermaid"
        defaultValue={mermaidData?.content || ''}
        value={inputValue}
        onChange={handleChange}
      />
      <div className="control">
        <Tooltip title="Copy" placement="top">
          <IconButton className="control-item" onClick={handleCopy}>
            <ContentCopyIcon className="icon-copy" fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>
    </>
  );
};

export default EditorInput;
