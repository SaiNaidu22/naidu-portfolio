import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: "#0f172a"
      }
    },

    fpsLimit: 60,

    particles: {

      number: {
        value: 70
      },

      color: {
        value: "#22d3ee"
      },

      links: {
        enable: true,
        color: "#22d3ee",
        distance: 150,
        opacity: 0.25
      },

      move: {
        enable: true,
        speed: 1
      },

      opacity: {
        value: 0.4
      },

      size: {
        value: {
          min: 1,
          max: 3
        }
      }

    }

  }), []);

  if (!init) return null;

  return (

    <Particles

      id="tsparticles"

      options={options}

      className="
      fixed
      inset-0
      -z-10
      "

    />

  );

}

export default ParticlesBackground;