import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Programs from "./components/programs/Programs";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Campus from "./components/campus/Campus";
import Testmonials from "./components/testmonials/Testmonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import VideoPlayer from "./components/videoplayer/VideoPlayer";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { useEffect, useState } from "react";

const App = () => {
  const [playing, setPlaying] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <Router>
      <div>
        <Navbar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
        <Hero />
        <div className="container">
          <Programs />
          <About setPlaying={setPlaying} />
          <Title title="Campus Photos" subtitle="Our Gallery" id="campus" />
          <Campus />
          <Title
            title="What Others Are Saying"
            subtitle="Testmonials"
            id="testmonials"
          />
          <Testmonials />
          <Title title="Get In Touch" subtitle="Contact Us" id="contact" />
          <Contact />
        </div>
        <Footer />
        <VideoPlayer playing={playing} setPlaying={setPlaying} />
      </div>
    </Router>
  );
};

export default App;
