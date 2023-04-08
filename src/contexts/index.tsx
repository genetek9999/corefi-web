import { configs } from "~/constants";

import { MetamaskProvider } from "./metamaskContext";

type Props = {
  children: React.ReactNode;
};

export const ContextProvider: React.FC<Props> = ({ children }) => {
  return <>{configs.ON_METAMASK ? <MetamaskProvider>{children}</MetamaskProvider> : children}</>;
};

export * from "./metamaskContext";
