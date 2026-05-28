import { useEffect, useState } from "react";

import Loader from "./components/Loader";
import ChatBot from "./components/ChatBot";
import ParticlesBackground from "./components/ParticlesBackground";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Programs from "./components/Programs";

import WhatsappButton from "./components/WhatsappButton";
import Footer from "./components/Footer";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 3000);

  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-black text-white overflow-hidden">

          <ParticlesBackground />

          <Navbar />

          <Hero />

          <Services />

          <Programs />

          <Footer />

          <WhatsappButton />

          <ChatBot />

        </div>
      )}
    </>
  );
}

export default App;