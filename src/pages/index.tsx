import { type NextPage } from "next";
import { Page } from "~/components";
import { Hero, OurMission } from "~/features/Home";

const Home: NextPage = () => {
  return (
    <Page>
      <Hero />
      <OurMission />
    </Page>
  );
};

export default Home;
