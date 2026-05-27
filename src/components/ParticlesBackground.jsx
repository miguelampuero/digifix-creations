// src/components/ParticlesBackground.jsx

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"

      init={particlesInit}

      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: {
            value: "#000000",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              area: 800,
            },
          },

          color: {
            value: [
              "#22c55e",
              "#3b82f6",
              "#ffffff",
            ],
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: {
              min: 1,
              max: 4,
            },
          },

          links: {
            enable: true,
            distance: 150,
            color: "#22c55e",
            opacity: 0.15,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;