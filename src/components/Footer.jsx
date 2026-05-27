// src/components/Footer.jsx

import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="contacto"
      className="relative overflow-hidden border-t border-white/10 bg-black py-20 px-6 scroll-mt-24"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-green-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-14">

          {/* BRAND */}
          <div>
            <h2 className="text-4xl font-black">
              Digi<span className="text-green-400">Fix</span>
            </h2>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Diseño gráfico, instalación de programas y soporte técnico remoto
              para potenciar tu productividad y presencia digital.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Navegación
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <a
                href="#inicio"
                className="hover:text-green-400 transition"
              >
                Inicio
              </a>

              <a
                href="#servicios"
                className="hover:text-green-400 transition"
              >
                Servicios
              </a>

              <a
                href="#programas"
                className="hover:text-green-400 transition"
              >
                Programas
              </a>

              <a
                href="#contacto"
                className="hover:text-green-400 transition"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Contacto
            </h3>

            <div className="space-y-5 text-gray-400">

              <p>
                📱 WhatsApp:
                <br />
                +51 981 041 162
              </p>

              <p>
                💻 Soporte remoto mediante AnyDesk
              </p>

              <p>
                🎨 Diseño gráfico profesional
              </p>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-5 mt-8">

              <a
                href="https://wa.me/51981041162"
                target="_blank"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:border-green-400 flex items-center justify-center transition hover:scale-110"
              >
                <FaWhatsapp size={22} />
              </a>

            <a
            href="https://www.facebook.com/profile.php?id=61577374914652"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:border-green-400 flex items-center justify-center transition hover:scale-110"
            >
            <FaFacebookF size={20} />
            </a>

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:border-green-400 flex items-center justify-center transition hover:scale-110"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">

          <p>
            © 2025 DigiFix Creations — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;