import { type NextPage } from "next";
import { Page, Section, SpaceSection } from "~/components";
import { Hero, OurMission } from "~/features/Home";
import { Offers } from "~/features/Home/Offers";

const Home: NextPage = () => {
  return (
    <Page>
      <Hero />

      <OurMission />

      <Offers />

      <Section size={1150}>
        <SpaceSection />
      </Section>
    </Page>
  );
};

export default Home;
