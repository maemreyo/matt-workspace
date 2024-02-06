import { FC, useEffect } from 'react';
import mermaid, { MermaidConfig } from 'mermaid';
import { useSelector } from 'react-redux';
import { projectSelector } from '../../../redux/features/projects/projectsSlice';
import { mermaidEditorSelector } from '../../../redux/features/mermaid/mermaidSlice';

interface IProps {
  projectId: string;
}

const mermaidOptions: MermaidConfig = {
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
};

const DiagramArea: FC<IProps> = ({ projectId }) => {
  const projectList = useSelector(projectSelector);
  const mermaidEditor = useSelector(mermaidEditorSelector);
  const mermaidData = projectList.filter(
    (project) => project.projectId === projectId
  )[0].mermaid;

  useEffect(() => {
    mermaid.initialize(mermaidOptions);
  }, [projectId]);

  useEffect(() => {
    const drawDiagram = async () => {
      const output = document.getElementById('output');

      try {
        if (output) {
          const mermaidSyntax = mermaidData?.content || '';
          mermaid.parse(mermaidSyntax);

          output.innerHTML = '';
          if (!mermaidSyntax) {
            return;
          }
          const { svg } = await mermaid.render(
            'digital-hq-output-diagram',
            mermaidSyntax
          );
          output.innerHTML = svg;
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (mermaidEditor.autoSync) {
      drawDiagram();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mermaidData, projectId, mermaidEditor.autoSync]);

  return <div id="output" />;
};

export default DiagramArea;
