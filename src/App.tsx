import { Container } from "./App.styled";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";
import TitleSection from "./Sections/TitleSection1";

function App() {
  return (
    <>
      <Container>
        <TitleSection />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </Container>
    </>
  );
}

export default App;
