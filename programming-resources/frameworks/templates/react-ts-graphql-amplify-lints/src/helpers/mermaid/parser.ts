// import fakeResponses from "./mocks";

import {
  DEFAULT_MARKER_BEGINNING_MERMAID_CODE,
  DEFAULT_MARKER_ENDING_MERMAID_CODE,
} from '../../config/root';

export class MermaidParser {
  public looseParse = (rawData: string): string | Error => {
    return this.getCode(rawData);
  };

  private getCode = (rawData: string) => {
    const { start, end } = this.findCode(rawData);
    if (start === -1 || end === -1) {
      return new Error('Invalid Code');
    }

    return rawData.substring(
      start + DEFAULT_MARKER_BEGINNING_MERMAID_CODE.length,
      end
    );
  };

  private findCode = (rawData: string) => {
    const start = rawData.indexOf(DEFAULT_MARKER_BEGINNING_MERMAID_CODE);
    const end = rawData.indexOf(
      DEFAULT_MARKER_ENDING_MERMAID_CODE,
      start + DEFAULT_MARKER_BEGINNING_MERMAID_CODE.length
    );

    return { start, end };
  };

  /**
   * parse the raw data from the ChatGPT to ParseResult
   */
  // public parse(rawData: string): ParseResult {
  // public parse(rawData: string): Partial<ParseResult> {
  //     // const diagramType = this.getDiagramType(this.findCode(rawData.trim()));
  //     const rawCode = this.findCode(rawData);
  //     const diagramType = this.getDiagramType(rawCode);
  //     console.log("diagram type: ", diagramType);

  //     let codeInfo: CodeInfo;
  //     switch (diagramType) {
  //         // case DiagramType.Graph:
  //         // case DiagramType.SequenceDiagram:
  //         // case DiagramType.ClassDiagram:
  //         // case DiagramType.StateDiagram:
  //         // case DiagramType.StateDiagramV2:
  //         // case DiagramType.EntityRelationshipDiagram:
  //         // case DiagramType.Journey:
  //         // case DiagramType.Gantt:
  //         // case DiagramType.Pie:
  //         // case DiagramType.GitDiagram:
  //         // case DiagramType.Mindmaps:
  //         // case DiagramType.Timeline:

  //         // case DiagramType.RequirementDiagram:
  //         // case DiagramType.C4CDiagram:
  //         case DiagramType.Flowchart:
  //             codeInfo = this.parseFlowChart(rawCode);
  //             return {
  //                 diagramType,
  //                 codeInfo
  //             }
  //         default:
  //             return {
  //                 diagramType,
  //             }
  //     }

  //     // return {
  //     //     diagramType,
  //     //     codeInfo
  //     // }
  // }

  // private parseFlowChart = (rawCode: string): FlowChart => {

  //     return {
  //         direction: this.getFlowDirection(rawCode),
  //         body: this.getFlowBody(rawCode)
  //     }
  // }

  // private getDiagramType = (rawData: string): DiagramType => {

  //     // console.log("split: <<<<", this.findCode(fakeResponses[0]), this.split(rawData));

  //     return this.split(rawData)[0] as DiagramType
  // };

  // private getFlowDirection = (rawData: string): FlowDirection => {
  //     return this.split(rawData)[1] as FlowDirection
  // };

  // private getFlowBody = (rawData: string): string => {
  //     console.log("this.split(rawData)", this.split(rawData));

  //     return "code body"
  // }

  // private split = (rawData: string): string[] => rawData.split("\n").join(',').split(" ").join(',').split(",");
}
