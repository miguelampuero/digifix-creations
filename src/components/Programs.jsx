import { motion } from "framer-motion";

import coreldraw from "../assets/programs/coreldraw.png";
import office from "../assets/programs/office.png";
import photoshop from "../assets/programs/photoshop.png";
import illustrator from "../assets/programs/illustrator.png";
import sketchup from "../assets/programs/sketchup.png";
import concar from "../assets/programs/concar.png";

const programs = [
  {
    name: "Microsoft Office",
    category: "Productividad",
    icon: office,
    image: true,

    description:
      "Word, Excel, PowerPoint y herramientas esenciales para productividad profesional y empresarial.",

    features: [
      "✅ Activación completa",
      "✅ Office optimizado",
      "✅ Compatible con Windows",
    ],
  },

  {
    name: "Adobe Photoshop",
    category: "Diseño Gráfico",
    icon: photoshop,
    image: true,

    description:
      "Edición profesional de imágenes y diseño gráfico para creadores y emprendedores.",

    features: [
      "✅ Instalación segura",
      "✅ Rendimiento optimizado",
      "✅ Herramientas profesionales",
    ],
  },

  {
    name: "Adobe Illustrator",
    category: "Vectorial",
    icon: illustrator,
    image: true,

    description:
      "Diseño vectorial profesional para logos, branding y contenido creativo.",

    features: [
      "✅ Configuración profesional",
      "✅ Máximo rendimiento",
      "✅ Compatible con plugins",
    ],
  },

  {
    name: "CorelDRAW",
    category: "Diseño Profesional",
    icon: coreldraw,
    image: true,

    description:
      "Diseño gráfico avanzado para impresión, publicidad y trabajos profesionales.",

    features: [
      "✅ Optimización avanzada",
      "✅ Herramientas completas",
      "✅ Instalación segura",
    ],
  },

  {
    name: "SketchUp",
    category: "Modelado 3D",
    icon: sketchup,
    image: true,

    description:
      "Modelado 3D profesional para arquitectura, interiores y proyectos técnicos.",

    features: [
      "✅ Renderizado optimizado",
      "✅ Configuración profesional",
      "✅ Compatible con extensiones",
    ],
  },

  {
    name: "CONCAR",
    category: "Contabilidad",
    icon: concar,
    image: true,

    description:
      "Sistema contable profesional para empresas, negocios y gestión financiera.",

    features: [
      "✅ Instalación completa",
      "✅ Configuración segura",
      "✅ Optimización empresarial",
    ],
  },
];

function Programs() {
  return (
    <section
      id="programas"
      className="relative py-32 px-6 bg-zinc-950 overflow-hidden scroll-mt-24"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-green-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* TITLE */}
      <div className="relative z-10 text-center mb-20">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black"
        >
          Programas Disponibles
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg"
        >
          Instalación profesional y optimización de software
          para productividad, diseño y negocios.
        </motion.p>
      </div>

      {/* GRID */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="group relative"
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500 rounded-[32px]"></div>

            {/* CARD */}
<div className="relative bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-[32px] p-8 transition duration-500 group-hover:border-green-400/40 group-hover:shadow-green-500/10 group-hover:shadow-2xl overflow-hidden min-h-[650px] flex flex-col">
              {/* TOP */}
              <div className="flex items-center justify-between mb-8">

                {/* ICON */}
                <motion.div
                  whileHover={{
                    rotate: 5,
                    scale: 1.1,
                  }}
                  className="flex items-center justify-center"
                >

                  {program.image ? (
                    <div className="w-28 h-28 bg-white rounded-3xl flex items-center justify-center p-4 shadow-2xl group-hover:scale-110 transition duration-500">

                      <img
                        src={program.icon}
                        alt={program.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="text-6xl">
                      {program.icon}
                    </div>
                  )}
                </motion.div>

                {/* CATEGORY */}
                <span className="bg-green-500/10 text-green-400 border border-green-400/20 px-4 py-2 rounded-full text-sm">
                  {program.category}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-3xl font-bold leading-tight">
                {program.name}
              </h3>

              {/* DESCRIPTION */}
            <p className="text-gray-400 mt-5 leading-relaxed min-h-[110px]">
              {program.description}
            </p>

              {/* FEATURES */}
              <div className="mt-8 space-y-3 flex-1">

                {program.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <a
                href="https://wa.me/51981041162"
                target="_blank"
                className="inline-block mt-10 bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-green-500/20"
              >
                Solicitar Ahora
              </a>

              {/* DECORATION */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Programs;