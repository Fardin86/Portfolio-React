import React from "react";
import Navbar from "./pages/Navbar";
// import Banner from "./pages/Banner";
// import About from "./pages/About";
import Skill from "./pages/Skil";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import './index.css';

import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";

//bg-gradient-to-r from-slate-900 to-slate-700
function App() {
  return (
    <Router>
      <div className="bg-gradient-to-r from-gray-900 to-slate-800">
        {/* <div>
        <Navbar />
        <Banner />
        <div className="max-w-screen-lg mx-auto">

          <About />
          <Skill />
          <Portfolio />
          <Contact />
        </div>
        <Footer />
      </div> */}
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/about' element={<Aboutpage />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='/project' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>


  );
}

export default App;
