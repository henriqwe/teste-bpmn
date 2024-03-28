import { useEffect } from "react";
import BpmnViewer from "bpmn-js/lib/Modeler";

const BLANK_DIAGRAM = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn2:process id="Process_1" isExecutable="false">
    <bpmn2:startEvent id="StartEvent_1"/>
  </bpmn2:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn2:definitions>`;

export function BpmnEditor({ diagram }: { diagram?: File | undefined }) {
  async function handleBpmnViewer(viewer: BpmnViewer) {
    try {
      const bpmnText = (await diagram?.text()) || BLANK_DIAGRAM;

      await viewer.importXML(bpmnText);

      viewer.get("canvas")?.zoom("fit-viewport");
    } catch (err) {
      console.log("error rendering bpmn", err);
    }
  }

  useEffect(() => {
    const viewer = new BpmnViewer({
      container: "#bpmnContainer",
      width: "100%",
      height: "100%",
      keyboard: {
        bindTo: window,
      },
    });

    handleBpmnViewer(viewer);

    return () => {
      viewer.destroy();
    };
  }, [diagram]);

  return <div id="bpmnContainer" className="h-full"></div>;
}
