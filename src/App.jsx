import './App.css'
import Navbar from './componenets/Navbar'
import Work from './componenets/Work'
import Stripes from './componenets/Stripes'
import Products from './componenets/Products'
import Marquees from './componenets/Marquees'
import Cards from './componenets/Cards'
import Footer from './componenets/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='w-full h-full'>
      <Navbar/>
      <Work />
      <Stripes/>
      <Products />
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
