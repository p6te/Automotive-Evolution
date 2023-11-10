import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import { Container } from "./styled";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./theme/theme";
import { MouseEventHandler, useState } from "react";

function App() {
  const [isLightTheme, setIsLghtTheme] = useState(true);

  const toggleTheme: MouseEventHandler<HTMLInputElement> = () => {
    console.log("test");
    setIsLghtTheme((prevState) => !prevState);
  };

  return (
    <>
      <Router>
        <ThemeProvider theme={isLightTheme ? light : dark}>
          <Container>
            <Navigation toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
