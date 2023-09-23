import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import { Container } from "./styled";

function App() {
  return (
    <>
      <Router>
        <Container>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
