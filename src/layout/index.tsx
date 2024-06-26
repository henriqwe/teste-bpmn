import { useState } from "react";
import { Header } from "./header/Header";
import { BpmnEditor } from "../components/BpmnEditor";

export function Layout() {
  const [bpmn, setBpmn] = useState<File>();

  return (
    <div className="w-full h-full bg-background flex flex-col">
      <Header />
      <input type="file" onChange={(e) => setBpmn(e.target.files?.[0])} />
      <div className="flex-grow">
        <BpmnEditor diagram={bpmn} />
      </div>
      {/* <Projects /> */}
      {/* <footer className="h-10"> footer </footer> */}
    </div>
  );
}
