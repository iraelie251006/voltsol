import About from "@/components/About";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImpactCounters from "@/components/ImpactCounters";
import InvestorStrip from "@/components/InvestorStrip";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import ValueProps from "@/components/ValueProps";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Problem />
        <Solution />
        <ValueProps />
        <ImpactCounters />
        <FeaturedProducts />
        <InvestorStrip />
      </main>
      <Footer />
    </div>
  );
}
