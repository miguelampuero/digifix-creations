// src/components/Navbar.jsx

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // DETECTAR SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <motion.a
          href="#inicio"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >

          <img
            src={logo}
            alt="DigiFix"
            className="w-12 h-12 rounded-full border border-green-400 shadow-lg shadow-green-500/30"
          />

          <h1 className="text-2xl md:text-3xl font-black tracking-wide">
            Digi<span className="text-green-400">Fix</span>
          </h1>
        </motion.a>

        {/* DESKTOP MENU */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden md:flex items-center gap-10 text-gray-300 font-medium"
        >

          <a
            href="#inicio"
            className="hover:text-green-400 transition duration-300"
          >
            Inicio
          </a>

          <a
            href="#servicios"
            className="hover:text-green-400 transition duration-300"
          >
            Servicios
          </a>

          <a
            href="#programas"
            className="hover:text-green-400 transition duration-300"
          >
            Programas
          </a>

          <a
            href="#contacto"
            className="hover:text-green-400 transition duration-300"
          >
            Contacto
          </a>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/51981041162"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 transition-all duration-300 px-6 py-3 rounded-2xl font-bold shadow-lg shadow-green-500/20 hover:scale-105"
          >
            WhatsApp
          </a>
        </motion.div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={34} /> : <Menu size={34} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10"
          >

            <div className="flex flex-col px-6 py-8 gap-6 text-lg font-medium text-gray-300">

              <a
                href="#inicio"
                onClick={() => setMenuOpen(false)}
                className="hover:text-green-400 transition"
              >
                Inicio
              </a>

              <a
                href="#servicios"
                onClick={() => setMenuOpen(false)}
                className="hover:text-green-400 transition"
              >
                Servicios
              </a>

              <a
                href="#programas"
                onClick={() => setMenuOpen(false)}
                className="hover:text-green-400 transition"
              >
                Programas
              </a>

              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="hover:text-green-400 transition"
              >
                Contacto
              </a>

              {/* MOBILE WHATSAPP */}
              <a
                href="https://wa.me/51981041162"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-center transition px-6 py-4 rounded-2xl font-bold shadow-lg shadow-green-500/20"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;