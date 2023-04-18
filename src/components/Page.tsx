import {
  Box,
  Center,
  type CenterProps,
  Container,
  type ContainerProps,
  Flex,
  Text,
  Title,
  Transition,
} from "@mantine/core";
import { useScrollLock } from "@mantine/hooks";
import lottie from "lottie-web";
import React, { useEffect } from "react";
import { keys } from "~/constants";
import { useRendered } from "~/hooks/useRendered";
import { Layout } from "~/layouts";

import { GalaxyBg } from "./GalaxyBg";

type PageProps = ContainerProps & {
  visibleGalaxy?: boolean;
};
type PreloadOverlayProps = Omit<CenterProps, "children"> & {
  isLoading: boolean;
  children?: React.ReactNode;
  duration?: number;
};

export const Page: React.FC<PageProps> = ({ children, visibleGalaxy = true, ...props }) => {
  const { rendered, RenderWrapper } = useRendered();
  const [isScrollLocked, setIsScrollLocked] = useScrollLock(true);

  useEffect(() => {
    if (rendered) {
      const anim = lottie.loadAnimation({
        container: document.querySelector("#animationWindow") as Element,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/Loading.json",
      });
      anim.setSpeed(1);
      setTimeout(() => {
        setIsScrollLocked(false);
      }, keys.PRELOAD_TIMEOUT);
    }
  }, [rendered, setIsScrollLocked]);

  return (
    <>
      <RenderWrapper>
        <Container size={1920} px={0} {...props}>
          <Layout>{visibleGalaxy ? <GalaxyBg>{children}</GalaxyBg> : children}</Layout>
        </Container>
      </RenderWrapper>

      <PreloadOverlay isLoading={isScrollLocked} />
    </>
  );
};

const PreloadOverlay: React.FC<PreloadOverlayProps> = ({ isLoading, duration = 1000, children, ...props }) => (
  <Transition mounted={isLoading} transition="fade" duration={duration} timingFunction="ease">
    {(styles) => (
      <Center
        style={styles}
        w="100vw"
        h="100vh"
        pos="fixed"
        top={0}
        left={0}
        sx={{ zIndex: 100 }}
        bg="#0A0118"
        {...props}
      >
        {children ? (
          children
        ) : (
          <Center maw={800} w={"100%"} h={"100%"} id="animationWindow">
            <Flex direction={"column"}>
              {" "}
              {/* <Box id="animationWindow"></Box> */}
              {/* <Title transform="uppercase" pos={"relative"} top={-50} ta={"center"} fz={{ base: 24, lg: 56 }}>
                Corefi
              </Title> */}
            </Flex>
          </Center>
        )}
      </Center>
    )}
  </Transition>
);
