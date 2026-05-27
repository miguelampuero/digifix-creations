import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function WhatsappButton() {
  return (
    <motion.a
      href="https://wa.me/51981041162"
      target="_blank"

      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        delay: 1.5,
        type: "spring",
        stiffness: 200,
      }}

      whileHover={{
        scale: 1.12,
      }}

      whileTap={{
        scale: 0.9,
      }}

      className="group fixed bottom-6 right-6 z-50"
    >

      {/* TOOLTIP */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-xl text-sm opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-xl">
        Chatea con nosotros 👋
      </div>

      {/* GLOW */}
      <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-70 animate-pulse"></div>

      {/* BUTTON */}
      <div className="relative w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 transition flex items-center justify-center shadow-2xl shadow-green-500/40">

        <FaWhatsapp size={34} className="text-white" />
      </div>
    </motion.a>
  );
}

export default WhatsappButton;