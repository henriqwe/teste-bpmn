import { useEffect } from "react";
import BpmnViewer from "bpmn-js/lib/Modeler";

export function BpmnEditor({ diagram }: { diagram: File }) {
  useEffect(() => {
    if (!diagram) {
      return;
    }

    const viewer = new BpmnViewer({
      container: "#bpmnContainer",
      width: "100%",
      height: "100%",
      keyboard: {
        bindTo: window,
      },
    });

    async function inicia() {
      try {
        const bpmnText = await diagram!.text();
        viewer.importXML(bpmnText).then(() => {
          const canvas = viewer.get("canvas") as any;
          canvas.zoom("fit-viewport");
        });
      } catch (err) {
        console.log("error rendering bpmn", err);
      }
    }

    inicia();

    return () => {
      viewer.destroy();
    };
  }, [diagram]);

  return <div id="bpmnContainer" className="h-full"></div>;
}
