import React from 'react'
import Home1 from '../components/Home/Home1/Home1'
import Dining from '../components/Home/Dining/Dining'
import Travel from '../components/Home/Travel/Travel'
import Card from '../components/Home/Card/Card'
import Apps from '../components/Home/Apps/Apps'
import Concierge from '../components/Home/Concierge/Concierge'
import Benefits from '../components/Home/Benefits/Benefits'
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div>
      <Header />
      <Home1 />
      <Dining />
      <Travel />
      <Card />
      <Apps />
      <Concierge />
      <Benefits />
      <Footer />
    </div>
  )
}

export default Home
