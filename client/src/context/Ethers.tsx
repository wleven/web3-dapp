import useEthers from "@/hooks/useEthers";
import React from "react";

export const EtherContext = React.createContext<ReturnType<typeof useEthers> | undefined>(undefined);

interface IProps {
  children: React.ReactNode;
}

export function EtherProvider(props: IProps) {
  const state = useEthers();

  return <EtherContext.Provider value={state}>{props.children}</EtherContext.Provider>;
}
