import { type NextPage } from "next";
import { Page } from "~/components";
import { Hero } from "~/features/Home";

const Home: NextPage = () => {
  return (
    <Page>
      <Hero />
    </Page>
  );
};

export default Home;
