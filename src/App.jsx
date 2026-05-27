import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Programs from "./components/Programs";
import WhatsappButton from "./components/WhatsappButton";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Services />
      <Programs />
      <Footer />
      <WhatsappButton />
    </div>
  );
}

export default App;