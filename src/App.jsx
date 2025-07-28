import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'

import BestSellers from './components/BestSellers'
import Gallery from './components/Gallery'
import NewArrival from './components/NewArrival'
import FeatureHighlights from './components/FeatureHighlights'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <Header/>
     <Hero/>
     <CategoryGrid/>
     <BestSellers/>
     <Gallery/>
     <NewArrival/>
     <FeatureHighlights/>
     <Footer/>
   </div>
  )
}

export default App
