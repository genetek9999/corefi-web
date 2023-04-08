import { Button, Flex, Title } from "@mantine/core";
import { type NextPage } from "next";
import { Page, Section } from "~/components";

const Mint: NextPage = () => {
  return (
    <Page bg="black">
      <Section h="100vh">
        <Flex direction="column" align="center" justify="center" h="50%">
          <Title mb={50}>Try out MINT feature!</Title>

          <Button variant="gradient" tt="uppercase">
            Mint
          </Button>
        </Flex>
      </Section>
    </Page>
  );
};

export default Mint;
