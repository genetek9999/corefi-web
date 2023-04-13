import { Text } from "@mantine/core";
import React from "react";

export const Balance = () => {
  return (
    <Text mt={20} mb={5} fz={{ base: 12 }} ta="end" fw={600}>
      <span style={{ opacity: 0.5, fontWeight: 400 }}>Balance:</span> {0}
    </Text>
  );
};
