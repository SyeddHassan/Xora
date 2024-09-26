import Header from "./sections/header-section";
import Hero from "./sections/hero-section";
import Features from "./sections/features-section";
import Pricing from "./sections/pricing-section";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
};

export default App;
