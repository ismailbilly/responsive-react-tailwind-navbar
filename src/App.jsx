
import './App.css'
import HorizontalScroll from './components/scroll/HorizontalScroll'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Service from './pages/Service'
import Destination from './pages/Destination'
import ellipse from './assets/Ellipse.png'

import TravelPage from './pages/TravelPage'
import FeatureSection from './pages/FeatureSection'
function App() {
 
  return (
    <div style={{ backgroundImage: `url(${ellipse})`, backgroundRepeat:"no-repeat" }}>
      <Navbar />
       <Hero /> 
       <HorizontalScroll /> 
       <Service /> 
      <Destination /> 
      <TravelPage /> 
      <FeatureSection/>
    </div>
  );
}

export default App
