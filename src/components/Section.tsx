import { Container, type ContainerProps } from "@mantine/core";
import React from "react";

type Props = ContainerProps;

export const Section: React.FC<Props> = ({ ...props }) => {
  return <Container size={1440} px={{ base: 20, sm: 40 }} py={{ base: 50, sm: 100 }} {...props} />;
};
