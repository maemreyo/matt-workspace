export enum DiagramType {
  Flowchart = 'flowchart', // 0
  Graph = 'graph', // 1
  SequenceDiagram = 'sequenceDiagram', // 2
  ClassDiagram = 'classDiagram', // 3
  StateDiagram = 'stateDiagram', // 4
  StateDiagramV2 = 'stateDiagram-v2', // 5
  EntityRelationshipDiagram = 'erDiagram', // 6
  Journey = 'journey', // 7
  Gantt = 'gantt', // 8
  Pie = 'pie', // 9
  RequirementDiagram = 'requirementDiagram', // 10 'detect wrong diagram' //! TODO
  GitDiagram = 'gitGraph', // 11
  C4CDiagram = 'C4Context', // 12
  Mindmaps = 'mindmap', // 13
  Timeline = 'timeline', // 14 'detect wrong diagram' //! TODO
}
export type FlowDirection = 'TB' | 'BT' | 'RL' | 'LR' | 'TD';

export interface FlowChart {
  direction: FlowDirection;
  body: string;
}

export interface Graph {
  direction: 'TB' | 'BT' | 'RL' | 'LR' | 'TD';
  body: string;
}

export type CodeInfo = FlowChart | Graph;

export interface ParseResult {
  diagramType: DiagramType;
  codeInfo: CodeInfo;
}
