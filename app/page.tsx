import Navbar from "@/components/Navbar";

import Hero from "@/components/hero/Hero";

import About from "@/components/about/About";

import Treatments from "@/components/treatments/Treatments";

import Gallery from "@/components/gallery/Gallery";

import WhyChoose from "@/components/highlights/WhyChoose";

import Reviews from "@/components/highlights/Reviews";

import Contact from "@/components/contact/Contact";

import Footer from "@/components/layout/Footer";


export default function Home() {

  return (

    <>

      <Navbar />

      <Hero />

      <About />

      <Treatments />

      <Gallery />

      <WhyChoose />

      <Reviews />

      <Contact />

      <Footer />

    </>

  );

}