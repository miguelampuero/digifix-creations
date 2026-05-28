import { motion } from "framer-motion";
import { ShieldCheck, Laptop, Zap } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <section
    id="inicio"
    className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 scroll-mt-24"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-green-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"></div>

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-5 py-2 rounded-full mb-8">
            <Zap className="text-green-400" size={18} />
            <span className="text-sm text-gray-300">
              Soporte Técnico & Diseño Digital
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-tight">
            Digi<span className="text-green-400">Fix</span>
            <br />
            Creations 🚀
          </h1>

          <p className="mt-8 text-gray-400 text-xl max-w-2xl leading-relaxed">
            Instalamos programas, optimizamos computadoras y potenciamos
            negocios con diseño gráfico moderno y soporte remoto seguro.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="https://wa.me/51981041162"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-2xl font-bold shadow-2xl shadow-green-500/30"
            >
              Contactar por WhatsApp
            </a>

            <a
              href="#servicios"
              className="border border-zinc-700 hover:border-green-400 transition px-8 py-4 rounded-2xl font-semibold"
            >
              Ver Servicios
            </a>
          </div>

        <div className="flex flex-wrap items-center gap-6 mt-8">

          <a
            href="https://www.facebook.com/profile.php?id=61577374914652"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-400 hover:text-green-300 transition font-medium"
          >
            📘 Facebook
          </a>

          <a
            href="https://www.instagram.com/digifixcreations/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition font-medium"
          >
            📸 Instagram
          </a>

        </div>

          {/* STATS */}
          <div className="flex flex-wrap gap-10 mt-14">

            <div>
              <h3 className="text-4xl font-black text-green-400">
                +100
              </h3>
              <p className="text-gray-500">
                Equipos Optimizados
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-green-400">
                24/7
              </h3>
              <p className="text-gray-500">
                Soporte Remoto
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-green-400">
                +50
              </h3>
              <p className="text-gray-500">
                Diseños Realizados
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -15, 0],
          }}
          transition={{
            duration: 1,
            y: {
              duration: 4,
              repeat: Infinity,
            },
          }}
          className="relative flex justify-center"
        >

          <div className="relative bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-[40px] p-10 shadow-2xl w-full max-w-lg">

            <div className="w-20 h-20 rounded-3xl bg-green-500/20 flex items-center justify-center mb-8">
              <Laptop className="text-green-400" size={42} />
            </div>

            <h2 className="text-4xl font-black leading-tight">
              Tecnología & Creatividad
            </h2>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Soluciones digitales profesionales para empresas,
              emprendedores y usuarios.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <ShieldCheck className="text-green-400" />
                <span>Soporte remoto seguro</span>
              </div>

              <div className="flex items-center gap-4">
                <ShieldCheck className="text-green-400" />
                <span>Instalación profesional</span>
              </div>

              <div className="flex items-center gap-4">
                <ShieldCheck className="text-green-400" />
                <span>Optimización avanzada</span>
              </div>
            </div>
          </div>

          <div className="absolute -z-10 w-[350px] h-[350px] bg-green-500/20 blur-[120px] rounded-full"></div>

        </motion.div>
      </div>
    </section>
  );
}

export default Hero;