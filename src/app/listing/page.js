import TourCard from "../Componentes/Tourpage/Tourpage";
import Navbar from "../Componentes/Navbar/Navbar";
import Footer from "../Componentes/Footer/Footer";
import Link from "next/link";

export default function ToursPage() {
  return (
    <>
      <Navbar />
      <div
        className="relative w-full h-[300px] flex flex-col justify-center pt-6 pl-6  text-white"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1532079563951-0c8a7dacddb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <h1 className="relative text-4xl font-bold z-10 mt-6">Contact Us</h1>

        <div className="relative z-10 mt-4 px-6 py-2 rounded-full flex   space-x-2 text-sm text-white  ">
          <Link href="/">Home</Link>
          <span className="mx-1">➜</span>
          <span className="font-semibold">Contact us</span>
        </div>
      </div>

      <div className="p-10   grid grid-cols-1 md:grid-cols-2 gap-6">
        <TourCard
          image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          title="Royal Rajasthan Tour Package"
          night={4}
          days={5}
          location="1N Manali - 2N Shimla - 1N Dharamshala - 1N Dalhousie"
          price={5999}
        />
        <TourCard
          image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          title="Royal Rajasthan Tour Package"
          night={4}
          days={5}
          location="1N Manali - 2N Shimla - 1N Dharamshala - 1N Dalhousie"
          price={5999}
        />
        <TourCard
          image="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
          title="Royal Rajasthan Tour Package"
          night={4}
          days={5}
          location="1N Manali - 2N Shimla - 1N Dharamshala - 1N Dalhousie"
          price={5999}
        />
        <TourCard
          image="https://images.unsplash.com/photo-1485420809171-283c31ad7ae5?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Royal Rajasthan Tour Package"
          night={4}
          days={5}
          location="1N Manali - 2N Shimla - 1N Dharamshala - 1N Dalhousie"
          price={5999}
        />
        <TourCard
          image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          title="Royal Rajasthan Tour Package"
          night={4}
          days={5}
          location="1N Manali - 2N Shimla - 1N Dharamshala - 1N Dalhousie"
          price={5999}
        />
        <TourCard
          image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          title="Royal Rajasthan Tour Package"
          night={4}
          days={5}
          location="1N Manali - 2N Shimla - 1N Dharamshala - 1N Dalhousie"
          price={5999}
        />
        <TourCard
          image="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
          title="Royal Rajasthan Tour Package"
          night={4}
          days={5}
          location="1N Manali - 2N Shimla - 1N Dharamshala - 1N Dalhousie"
          price={5999}
        />
        <TourCard
          image="https://images.unsplash.com/photo-1485420809171-283c31ad7ae5?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Royal Rajasthan Tour Package"
          night={4}
          days={5}
          location="1N Manali - 2N Shimla - 1N Dharamshala - 1N Dalhousie"
          price={5999}
        />
      </div>
      <Footer />
    </>
  );
}
