import { type NextPage } from "next";
import { Page, Section, SpaceSection } from "~/components";
import { Hero, Vaults } from "~/features/Liquidity";

const LiquidityVaults: NextPage = () => {
  return (
    <Page>
      <Section size={1200}>
        <Hero />

        <Vaults />

        <SpaceSection />
      </Section>
    </Page>
  );
};

export default LiquidityVaults;
