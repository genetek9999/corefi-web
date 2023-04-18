import { Flex, Grid, Text, Title } from "@mantine/core";
import { type NextPage } from "next";
import { Page, Section, SpaceSection } from "~/components";
import { TokenProvider } from "~/contexts/tokenContext";
import { Information, Main, Overview, Remittances, TotalStaked } from "~/features/Stake";

const Stake: NextPage = () => {
  return (
    <Page>
      <Section size={1250} py={{ base: 100, sm: 150 }}>
        <Title ta="center" fz={{ base: 40, sm: 64 }} mb={15}>
          CoreFi Staking
        </Title>

        <Text ta="center" fz={{ sm: 20 }} mb={60} maw={750} mx="auto">
          Be a DeFi Master with CoreFi. Swap, Earn, Stake, Yield Farming, all in one decentralized, community driven
          platform. Welcome home to DeFi.
        </Text>

        <Grid gutter={40}>
          <Grid.Col span={12} md={6}>
            <Flex direction="column" gap={40}>
              <Overview />

              <Information />

              <TotalStaked />
            </Flex>
          </Grid.Col>

          <Grid.Col span={12} md={6}>
            <Flex direction="column" gap={40}>
              <TokenProvider>
                <Main />
              </TokenProvider>

              <Remittances />
            </Flex>
          </Grid.Col>

          <Grid.Col span={12}>
            <SpaceSection />
          </Grid.Col>
        </Grid>
      </Section>
    </Page>
  );
};

export default Stake;
