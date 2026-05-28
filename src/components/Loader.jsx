// src/components/Loader.jsx

import { motion } from "framer-motion";

import robot from "../assets/robot.png";

function Loader() {
  return (
    <motion.div

      initial={{
        opacity: 1,
      }}

      exit={{
        opacity: 0,
      }}

      transition={{
        duration: 1,
      }}

      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
    >

      {/* GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-green-500/20 blur-[120px] rounded-full"></div>

      {/* ROBOT */}
      <motion.img
        src={robot}
        alt="Robot Loader"

        animate={{
          y: [0, -20, 0],
        }}

        transition={{
          duration: 2,
          repeat: Infinity,
        }}

        className="relative w-40 h-40 object-contain drop-shadow-[0_0_40px_rgba(34,197,94,0.5)]"
      />

      {/* TITLE */}
      <motion.h1

        initial={{
          opacity: 0,
          y: 30,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: 0.3,
          duration: 1,
        }}

        className="relative text-6xl md:text-7xl font-black mt-10"
      >
        DigiFix Creations
      </motion.h1>

      {/* SUBTITLE */}
      <motion.p

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        transition={{
          delay: 0.8,
          duration: 1,
        }}

        className="relative text-gray-400 mt-4 text-lg"
      >
        Inicializando sistema...
      </motion.p>

      {/* LOADING BAR */}
      <div className="relative w-[280px] h-2 bg-white/10 rounded-full overflow-hidden mt-10">

        <motion.div

          initial={{
            width: 0,
          }}

          animate={{
            width: "100%",
          }}

          transition={{
            duration: 3,
          }}

          className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
        />

      </div>
    </motion.div>
  );
}

export default Loader;