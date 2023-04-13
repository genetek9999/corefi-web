import { type NextPage } from "next";
import { Page, Section, SpaceSection } from "~/components";
import { Hero, OurMission } from "~/features/Home";

const Home: NextPage = () => {
  return (
    <Page>
      <Hero />

      <OurMission />

      <Section size={1150}>
        <SpaceSection />
      </Section>
    </Page>
  );
};

export default Home;
