
import Booking from '../Booking/Booking'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import HowItWorks from '../HowItWorks/HowItWorks'
import MostPopular from '../MostPopular/MostPopular'
import TestImonials from '../TestImonials/TestImonials'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'


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
