export default function outputContext() {
  const { output } = useContext(OutputContext);

  return (
    <OutputContextProvider>
      <div className="w-full h-96 bg-gray-300 p-4 text-left rounded-xl overflow-y-auto">
        <pre
          style={{
            overflowX: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
        >
          {output}
        </pre>
      </div>
    </OutputContextProvider>
  );
}

import { useContext } from "react";
import { OutputContextProvider, OutputContext } from "./outputContext";
