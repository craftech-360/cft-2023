import "./App.css";
// import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Gamification from "./pages/Gamification";
import Kinetics from "./pages/Kinetics";
import Projection from "./pages/Projection";
import InteractiveScreens from "./pages/InteractiveScreens";
import ResponsiveNavbar from "./components/Nav/ResponsiveNavbar";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <ResponsiveNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Case_Studies" element={<CaseStudies />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Kinetics" element={<Kinetics />} />
        <Route path="/Projection" element={<Projection />} />
        <Route path="/Gamification" element={<Gamification />} />
        <Route path="/Interactive_Screens" element={<InteractiveScreens />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
