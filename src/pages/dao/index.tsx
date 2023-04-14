import { Box, Flex } from "@mantine/core";
import { type NextPage } from "next";
import { Page, Section } from "~/components";
import { NewProposal, Proposals, Sidebar, Treasury } from "~/features/Dao";

const Dao: NextPage = () => {
  return (
    <Page>
      <Section size={1000} py={0} mih="54vh">
        <Flex direction={{ base: "column", sm: "row" }} gap={50} pt={{ base: 100, sm: 150 }} pb={{ base: 50, sm: 100 }}>
          <Sidebar />

          <Box sx={{ flex: 1 }}>
            <Proposals />

            <NewProposal />

            <Treasury />
          </Box>
        </Flex>
      </Section>
    </Page>
  );
};

export default Dao;
