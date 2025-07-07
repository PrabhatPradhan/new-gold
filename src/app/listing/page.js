import TourCard from "../Componentes/Tourpage/Tourpage";
import Navbar from "../Componentes/Navbar/Navbar"
import Footer from "../Componentes/Footer/Footer"

export default function ToursPage() {


  return (
   <>
   <Navbar/>
   <div className="p-10 mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
      <TourCard
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        title="Journey Through Rich Culture and History"
        days={2}
        night={1}
        location="Heidelberg"
        price={99}
      />
      <TourCard
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        title="Lake District From Edinburgh, UK"        
        days={3}
        night={2}
        location="Edinburgh"
        price={581}
        featured
      />
      <TourCard
        image="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
        title="Lucerne and St. Moritz Relaxed Start"         
        days={2}
        night={1}
        location="Andermatt"
        price={359}
      />
      <TourCard
        image="https://images.unsplash.com/photo-1485420809171-283c31ad7ae5?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="National Parks Winter Tour, USA"         
        days={3}
        night={2}
        location="Las Vegas"
        price={315}
        featured
      />
      <TourCard
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        title="Journey Through Rich Culture and History"      
        days={2}
        night={1}
        location="Heidelberg"
        price={99}
      />
      <TourCard
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        title="Journey Through Rich Culture and History"         
        days={2}
        night={1}
        location="Heidelberg"
        price={99}
      />
      <TourCard
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        title="Journey Through Rich Culture and History"        
        days={2}
        night={1}
        location="Heidelberg"
        price={99}
      />
      <TourCard
        image="https://images.unsplash.com/photo-1750796586893-238ec07e7e02?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Journey Through Rich Culture and History"         
        days={2}
        night={1}
        location="Heidelberg"
        price={99}
      />
      <TourCard
        image="https://images.unsplash.com/photo-1750688650545-d9e2a060dfe8?q=80&w=1106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Journey Through Rich Culture and History"        
        days={2}
        night={1}
        location="Heidelberg"
        price={99}
      />
      <TourCard
        image="https://images.unsplash.com/photo-1477696717525-6a7e2ec89f40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Journey Through Rich Culture and History"         
        days={2}
        night={1}
        location="Heidelberg"
        price={99}
      />

    </div>
    <Footer/>
   </>
  );
}