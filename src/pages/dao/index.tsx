import { Box, Flex } from "@mantine/core";
import { type NextPage } from "next";
import { Page, Section } from "~/components";
import { NewProposal, Proposals, Sidebar, Treasury } from "~/features/Dao";

const Dao: NextPage = () => {
  return (
    <Page>
      <Section size={1000} mih="54vh">
        <Flex gap={50}>
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
