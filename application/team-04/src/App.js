import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
//pages
import Home from "./pages/home/home";
import TeamMember1 from "./pages/about/TeamMember1";
import TeamMember2 from "./pages/about/TeamMember2";
import TeamMember3 from "./pages/about/TeamMember3";
import TeamMember4 from "./pages/about/TeamMember4";
import TeamMember5 from "./pages/about/TeamMember5";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/team-member1" element={<TeamMember1 />} />
          <Route path="/team-member2" element={<TeamMember2 />} />
          <Route path="/team-member3" element={<TeamMember3 />} />
          <Route path="/team-member4" element={<TeamMember4 />} />
          <Route path="/team-member5" element={<TeamMember5 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
