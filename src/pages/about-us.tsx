import { type NextPage } from "next";
import { Page, Section, SpaceSection } from "~/components";
import { Hero } from "~/features/About";
import { Offers } from "~/features/About/Offers";
import { Partner } from "~/features/About/Partner";
import { RoadMap } from "~/features/About/RoadMap";
import { Tokenomic } from "~/features/About/Tokenomic";

const LiquidityVaults: NextPage = () => {
  return (
    <Page>
      <Hero />

      <Offers />

      <RoadMap />

      <Partner />

      <Tokenomic />

      <Section size={1150}>
        <SpaceSection />
      </Section>
    </Page>
  );
};

export default LiquidityVaults;
