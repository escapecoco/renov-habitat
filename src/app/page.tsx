import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import RestorationMosaic from "@/components/RestorationMosaic";
import ServicesGrid from "@/components/ServicesGrid";
import Clientele from "@/components/Clientele";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import ClosingCta from "@/components/ClosingCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Header />
      <Hero />
      <Partners />
      <RestorationMosaic />
      <ServicesGrid />
      <Clientele />
      <Testimonials />
      <Stats />
      <ClosingCta />
      <Footer />
    </div>
  );
}
