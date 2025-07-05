import React from "react";
import Navbar from "../Componentes/Navbar/Navbar";
import Footer from "../Componentes/Footer/Footer";
import Achievements from "../Componentes/Achievements/Achievements";
// import WhyChooseUs from "../Componentes/WhyChooseUs/WhyChooseUs";
import Contactform from "../Componentes/Contactform/Contactform";
import Link from "next/link";
export default function page() {
  return (
    <>
      <Navbar />

      <div
        className="relative w-full h-[300px] flex flex-col justify-center pt-6 pl-6  text-white"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1597157153515-028fa3d4bd69?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
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

      <Contactform />

      <div className="w-full h-[400px] mt-10">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7251188721553!2d90.36650967509194!3d23.79108938709132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ce1ba1726b%3A0x8fd74a98fbd7293b!2sMirpur%20DOHS!5e0!3m2!1sen!2sbd!4v1689930974036!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          className="border-0 w-full h-full rounded-md shadow-md"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Achievements />

      <Footer />
    </>
  );
}
