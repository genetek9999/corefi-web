import React from "react";

import { useDisplayTokens } from "../hooks";
import { TradingViewWidget } from "./TradingViewWidget";

export const Chart = () => {
  const [tokenFrom, tokenTo] = useDisplayTokens((state) => [state.tokenFrom, state.tokenTo]);

  if (tokenFrom && tokenTo) {
    return <TradingViewWidget symbol={`${tokenFrom.symbol.toUpperCase()}${tokenTo.symbol.toUpperCase()}`} />;
  }

  return <></>;
};
