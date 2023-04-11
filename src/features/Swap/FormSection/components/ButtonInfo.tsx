import React from "react";
import { BiInfoCircle } from "react-icons/bi";

import { useSelectedDisplay } from "../../hooks";

export const ButtonInfo = () => {
  const setDisplay = useSelectedDisplay((state) => state.setValue);

  return <BiInfoCircle size={22} onClick={() => setDisplay("info")} style={{ cursor: "pointer" }} />;
};
