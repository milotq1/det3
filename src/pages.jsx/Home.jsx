import React from 'react'
import Home1 from '../components/Home/Home1/Home1'
import Dining from '../components/Home/Dining/Dining'
import Travel from '../components/Home/Travel/Travel'
import Card from '../components/Home/Card/Card'

function Home() {
  return (
    <div>
      <Home1 />
      <Dining />
      <Travel />
      <Card />
    </div>
  )
}

export default Home
