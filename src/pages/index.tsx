import { type NextPage } from "next";
import { Page, Section, SpaceSection } from "~/components";
import { Hero, OurMission } from "~/features/Home";
import { ConnectLiquidity } from "~/features/Home/ConnectLiquidity";
import { CorefiCommunity } from "~/features/Home/CorefiCommunity";
import { CorefiNetwork } from "~/features/Home/CorefiNetwork";
import { CorefiStake } from "~/features/Home/CorefiStake";
import { Offers } from "~/features/Home/Offers";
import { Space } from "~/features/Home/Space";

const Home: NextPage = () => {
  return (
    <Page>
      <Hero />

      <OurMission />

      <Offers />

      <ConnectLiquidity />

      <Space />

      <CorefiNetwork />

      <CorefiStake />

      <CorefiCommunity />

      <Section size={1150}>
        <SpaceSection />
      </Section>
    </Page>
  );
};

export default Home;
