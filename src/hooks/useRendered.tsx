import { useEffect, useState } from "react";

type RenderWrapperProps = { children: React.ReactNode };

export const useRendered = () => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  const RenderWrapper: React.FC<RenderWrapperProps> = ({ children }) => {
    if (!rendered) return <></>;

    return <>{children}</>;
  };

  return { rendered, RenderWrapper };
};
