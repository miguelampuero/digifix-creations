import {
  Monitor,
  Paintbrush,
  Wrench,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    title: "Instalación de Programas",
    icon: <Monitor size={42} />,
    description:
      "Office, Photoshop, Illustrator, CorelDRAW, SketchUp y más.",
  },

  {
    title: "Diseño Gráfico",
    icon: <Paintbrush size={42} />,
    description:
      "Creamos logos, flyers y contenido visual profesional.",
  },

  {
    title: "Optimización PC",
    icon: <Wrench size={42} />,
    description:
      "Aceleramos y optimizamos computadoras y laptops.",
  },

  {
    title: "Soporte Remoto",
    icon: <ShieldCheck size={42} />,
    description:
      "Asistencia segura y rápida mediante AnyDesk.",
  },
];

function Services() {
  return (
    <section
    id="servicios"
    className="relative py-32 px-6 overflow-hidden scroll-mt-24"
    >

      <div className="relative z-10 text-center mb-20">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black"
        >
          Nuestros Servicios
        </motion.h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="group relative"
          >

      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 h-[260px] flex flex-col">

              <div className="text-green-400 mb-8">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-5">
                {service.title}
              </h3>

            <p className="text-gray-400 mt-auto">
            {service.description}
          </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;