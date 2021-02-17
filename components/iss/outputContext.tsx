interface context {
  output: string;
  setOutput: any;
}

export const OutputContext = createContext<Partial<context>>({});

export const OutputContextProvider: React.FC = ({ children }) => {
  const [output, setOutput] = useState<string>("");
  return (
    <OutputContext.Provider value={{ output, setOutput }}>
      {children}
    </OutputContext.Provider>
  );
};

import { useState, createContext } from "react";
