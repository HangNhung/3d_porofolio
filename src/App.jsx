import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Experience, Tech, Contact } from "src/components";
import StarsCanvas from "./components/canvas/Stars";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
