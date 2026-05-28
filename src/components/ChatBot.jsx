// src/components/ChatBot.jsx

import { useState, useEffect, useRef } from "react";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import robot from "../assets/robot.png";

function ChatBot() {

  const [open, setOpen] = useState(false);

  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hola, soy DigiFix AI. ¿Qué servicio necesitas?",
    },
  ]);

  const messagesEndRef = useRef(null);

  // AUTO SCROLL
  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages, typing]);

  // SEND MESSAGE
  const sendMessage = (text, response) => {

    // USER MESSAGE
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text,
      },
    ]);

    // TYPING
    setTyping(true);

    // BOT RESPONSE
    setTimeout(() => {

      setTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: response,
        },
      ]);

    }, 1500);
  };

  return (
    <>
      {/* FLOATING ROBOT */}
      <motion.div
        onClick={() => setOpen(!open)}

        animate={{
          y: [0, -12, 0],
        }}

        transition={{
          duration: 3,
          repeat: Infinity,
        }}

        whileHover={{
          scale: 1.08,
        }}

        className="fixed bottom-24 right-6 z-50 cursor-pointer"
      >

        {/* GLOW */}
        <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>

        {/* ROBOT */}
        <img
          src={robot}
          alt="Robot Assistant"
          className="relative w-28 h-28 object-contain drop-shadow-[0_0_25px_rgba(34,197,94,0.5)]"
        />

        {/* ONLINE STATUS */}
        <div className="absolute top-3 right-2 w-5 h-5 bg-green-400 rounded-full border-4 border-black animate-pulse"></div>
      </motion.div>

      {/* CHAT */}
      <AnimatePresence>

        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}

            transition={{
              duration: 0.25,
            }}

            className="fixed bottom-44 right-6 z-50 w-[370px] h-[640px] rounded-[32px] overflow-hidden border border-white/10 bg-zinc-950/95 backdrop-blur-2xl shadow-2xl flex flex-col"
          >

            {/* HEADER */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-5 flex items-center justify-between">

              <div>
                <h2 className="text-3xl font-black text-white">
                  DigiFix AI 🤖
                </h2>

                <p className="text-sm text-white/80 mt-1">
                  Asistente virtual online
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-white hover:rotate-90 transition duration-300"
              >
                <X size={30} />
              </button>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 bg-black/20">

              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <div
                    className={`max-w-[75%] p-4 rounded-3xl text-sm leading-relaxed ${
                      msg.sender === "bot"
                        ? "bg-white/5 border border-white/10 text-gray-300"
                        : "bg-green-500 text-white shadow-lg shadow-green-500/20"
                    }`}
                  >
                    {msg.text}
                  </div>

                </div>
              ))}

              {/* TYPING */}
              {typing && (
                <div className="flex justify-start">

                  <div className="bg-white/5 border border-white/10 text-gray-400 px-5 py-4 rounded-3xl text-sm flex items-center gap-2">

                    <span className="animate-bounce">•</span>
                    <span className="animate-bounce delay-100">•</span>
                    <span className="animate-bounce delay-200">•</span>

                  </div>
                </div>
              )}

              <div ref={messagesEndRef}></div>
            </div>

            {/* QUICK OPTIONS */}
            <div className="border-t border-white/10 p-4 space-y-3 bg-zinc-950">

              <button
                onClick={() =>
                  sendMessage(
                    "📊 Microsoft Office",
                    "Microsoft Office incluye Word, Excel, PowerPoint y activación completa optimizada para Windows."
                  )
                }
                className="w-full text-left bg-white/5 hover:bg-green-500/10 border border-white/10 hover:border-green-400 rounded-xl px-4 py-3 text-sm transition"
              >
                📊 Instalar Microsoft Office
              </button>

              <button
                onClick={() =>
                  sendMessage(
                    "🎨 Adobe Photoshop",
                    "Photoshop profesional optimizado para diseño gráfico y edición avanzada."
                  )
                }
                className="w-full text-left bg-white/5 hover:bg-green-500/10 border border-white/10 hover:border-green-400 rounded-xl px-4 py-3 text-sm transition"
              >
                🎨 Instalar Photoshop
              </button>

              <button
                onClick={() =>
                  sendMessage(
                    "🚀 Optimización PC",
                    "Optimizamos laptops y PCs para máximo rendimiento y velocidad."
                  )
                }
                className="w-full text-left bg-white/5 hover:bg-green-500/10 border border-white/10 hover:border-green-400 rounded-xl px-4 py-3 text-sm transition"
              >
                🚀 Optimizar mi PC
              </button>

              <button
                onClick={() =>
                  sendMessage(
                    "🎨 Diseño Gráfico",
                    "Creamos logos, flyers, banners y contenido profesional para redes sociales."
                  )
                }
                className="w-full text-left bg-white/5 hover:bg-green-500/10 border border-white/10 hover:border-green-400 rounded-xl px-4 py-3 text-sm transition"
              >
                🎨 Diseño Gráfico
              </button>

            </div>

            {/* FOOTER */}
            <div className="border-t border-white/10 p-4 bg-zinc-950">

              <a
                href="https://wa.me/51981041162"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 transition py-4 rounded-2xl font-bold shadow-lg shadow-green-500/20"
              >
                <Send size={20} />
                Contactar por WhatsApp
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatBot;