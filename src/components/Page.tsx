import { Center, type CenterProps, Container, type ContainerProps, Text, Transition } from "@mantine/core";
import { useScrollLock } from "@mantine/hooks";
import React, { useEffect } from "react";
import { keys } from "~/constants";
import { useRendered } from "~/hooks/useRendered";

type PageProps = ContainerProps;
type PreloadOverlayProps = Omit<CenterProps, "children"> & {
  isLoading: boolean;
  children?: React.ReactNode;
  duration?: number;
};

export const Page: React.FC<PageProps> = ({ children, ...props }) => {
  const { rendered, RenderWrapper } = useRendered();
  const [isScrollLocked, setIsScrollLocked] = useScrollLock(true);

  useEffect(() => {
    if (rendered) {
      setTimeout(() => {
        setIsScrollLocked(false);
      }, keys.PRELOAD_TIMEOUT);
    }
  }, [rendered, setIsScrollLocked]);

  return (
    <>
      <RenderWrapper>
        <Container size={1920} {...props}>
          {children}
        </Container>
      </RenderWrapper>

      <PreloadOverlay isLoading={isScrollLocked} />
    </>
  );
};

const PreloadOverlay: React.FC<PreloadOverlayProps> = ({ isLoading, duration = 1000, children, ...props }) => (
  <Transition mounted={isLoading} transition="fade" duration={duration} timingFunction="ease">
    {(styles) => (
      <Center style={styles} w="100vw" h="100vh" pos="fixed" top={0} left={0} sx={{ zIndex: 100 }} bg="#333" {...props}>
        {children ? (
          children
        ) : (
          <Text tt="uppercase" fw="bold" fz="2rem">
            Loading...
          </Text>
        )}
      </Center>
    )}
  </Transition>
);
