import Navbar from "./Componentes/Navbar/Navbar";
import Top from "./Componentes/Top/Top";
import Carousel from "./Componentes/Carousel/Carousel"
import Slider from "./Componentes/Slider/Slider"
import MidPart from './Componentes/MidPart/MidPart'
import Cards from "./Componentes/Cards/Cards"
import PopularThings from "./Componentes/PopularThings/PopularThings"
import Whoweare from "./Componentes/Whoweare/Whoweare"
import Footer from "./Componentes/Footer/Footer";
import PromoCards from "./Componentes/PromoCards/PromoCards";
import Visafree from "./Componentes/Visafree/Visafree"
 
 
export default function Home() {
  return (
     <>
      
    <Navbar/>
    <Top/>
    <Carousel/>
    <Slider/>
    <MidPart/>
    <Cards/>
    <Slider/>
    <Visafree/>
    <PopularThings/>
    <Whoweare/>
    <PromoCards/>
    <Footer/>
   
     </>
  );
}
