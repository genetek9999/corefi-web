import { useRef } from "react";

export const useRefPortal = <
  T extends
    | React.ForwardRefExoticComponent<unknown>
    | (new (props: unknown) => React.Component<unknown, object, unknown>)
    | ((
        props: unknown,
        context?: unknown,
      ) => React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | null)
    | keyof JSX.IntrinsicElements,
>() => {
  return useRef<React.ElementRef<T>>(null);
};
