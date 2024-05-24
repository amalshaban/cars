
import { Outlet } from 'react-router-dom'
import Booking from '../Booking/Booking'
import NavBar from '../NavBar/NavBar'
import Slider from '../Slider/Slider'
import MostPopular from '../MostPopular/MostPopular'
import HowItWorks from '../HowItWorks/HowItWorks'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import TestImonials from '../TestImonials/TestImonials'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'


export default function Home() {
  return (
    <>
      <Header></Header>
      <MostPopular></MostPopular>
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>
      <TestImonials></TestImonials>
      <Booking></Booking>
      <Footer></Footer>
     
    </>
    
  )
}
