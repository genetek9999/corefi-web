import { Box, Flex, Group, Input, Text, Title } from "@mantine/core";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { HybridLink } from "~/components";
import { shortenWalletAddress } from "~/utils";

import { DaoMenu, useSelectMenu } from "./hooks";

export const Proposals = () => {
  const selectedMenu = useSelectMenu((state) => state.value);

  if (selectedMenu !== DaoMenu.PROPOSALS) return <></>;

  return (
    <>
      <Group position="apart" mb={20}>
        <Title order={2} fz={{ base: 20, sm: 24 }} fw={600}>
          Proposals
        </Title>

        <Group spacing={5} sx={{ border: "1px solid #ffffff25", borderRadius: 25 }} pl="xs">
          <FiSearch size={18} />

          <Input variant="unstyled" placeholder="Search..." />
        </Group>
      </Group>

      <Flex direction="column" gap={20}>
        <Post />
      </Flex>
    </>
  );
};

const Post = () => (
  <HybridLink href="/dao/proposal/1">
    <Box
      bg="linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.0224) 100%)"
      sx={{ borderRadius: 12 }}
      p="xl"
    >
      <Group position="apart">
        <Group spacing={5}>
          <Text>{shortenWalletAddress("asd")}</Text>
        </Group>

        <Box fz={14}>Active</Box>
      </Group>

      <Title order={3} my="sm" fz={{ base: 20, sm: 24 }} fw={600}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quibusdam.
      </Title>

      <Text lineClamp={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magni temporibus deleniti id eligendi. Praesentium
        blanditiis exercitationem enim sunt quod.
      </Text>

      <Text fw="bold" fz={14} mt="lg">
        1 day left
      </Text>
    </Box>
  </HybridLink>
);
