import Header from "./sections/header-section";
import Hero from "./sections/hero-section";
import Features from "./sections/features-section";
import Pricing from "./sections/pricing-section";
import Faq from "./sections/faq-section";
import Testimonials from "./sections/testimonials-section";
import Download from "./sections/downlaod-section";
import Footer from "./sections/footer-section";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
};

export default App;
