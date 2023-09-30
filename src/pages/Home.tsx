import { PageContainer } from "src/components/common";
import Section2 from "src/components/sections/Section2";
import Section3 from "src/components/sections/Section3";
import Section4 from "src/components/sections/Section4";
import TitleSection from "src/components/sections/TitleSection1";

const Home = () => {
  return (
    <PageContainer>
      <TitleSection />
      <Section2 />
      <Section3 />
      <Section4 />
    </PageContainer>
  );
};

export default Home;
