import { Box } from "@mantine/core";
import React, { useState } from "react";

import { useSelectedToken } from "../../hooks";
import { BoxDisplay, SubTopbar } from "../components";
import { TokenDetail, TokenSegmented } from "./components";

export const Info = () => {
  const [tokenFrom] = useSelectedToken((state) => [state.currencyFrom, state.currencyTo]);
  const [currentToken, setCurrentToken] = useState(tokenFrom);

  return (
    <BoxDisplay value="info">
      <SubTopbar title="Info">
        <TokenSegmented onSelect={setCurrentToken} />
      </SubTopbar>

      <Box mt={20}>
        <TokenDetail token={currentToken} />
      </Box>
    </BoxDisplay>
  );
};
