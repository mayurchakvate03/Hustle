import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Email from './components/Email/Email'
import Banner2 from './components/Banner/Banner2'

const App = () => {
  return (
    <main>
     <Navbar />
     <Hero />
     <Services />
     <Banner />
     <Cards/>
     <Banner2/>
     <Email/>
    </main>
  )
}

export default App
