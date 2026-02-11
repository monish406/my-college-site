
import Header from "@/components/Layout/header";
import About from "@/components/Home/about";
import Hero from "@/components/Home/hero";
import Services from "@/components/Home/services";
import Whychooseus from "@/components/Home/whychoose";
import Cta from "@/components/Home/cta";
import Footer from "@/components/Layout/footer";
export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Whychooseus/>
      <Cta/>
      <Footer/>
    </>
  );
}
