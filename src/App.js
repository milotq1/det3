import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages.jsx/Home";
import Visa from "./pages.jsx/Visa";
import Membership from "./pages.jsx/Membership";
import Travel from "./components/Home/Travel/Travel";
// import Main from "./components/Home/Main/Main";
import Dining from "./components/Home/Dining/Dining";
import Concierge from "./components/Home/Concierge/Concierge";
import Card from "./components/Home/Card/Card";
import Benefits from "./components/Home/Benefits/Benefits";
import Home1 from "./components/Home/Home1/Home1";
import Apps from "./components/Home/Apps/Apps";
import Header from "./components/Header/Header";


function App() {
  return (
   <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/visa" element={<Visa />}/>
      <Route path="/membership" element={<Membership />}/>
      <Route path="/travel" element={<Travel/>}/>
      <Route path="/apps1" element={<Apps />}/>
      <Route path="/dining" element={<Dining />}/>
      <Route path="/concierge" element={<Concierge />}/>
      <Route path="/card" element={<Card />}/>
      <Route path="/benefits" element={<Benefits />}/>
      <Route path="/home1" element={<Home1 />}/>
    </Routes>
   </Router>
  );
}

export default App;
