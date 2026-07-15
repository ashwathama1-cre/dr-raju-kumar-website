import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/about/About";
import Treatments from "@/components/treatments/Treatments";
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
      <WhyChoose />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}