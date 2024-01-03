import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return init ? (
    <Particles
      className="particles"
      id="tsparticles"
      options={{
        name: "Slow",
        particles: {
          number: {
            value: 75,
            density: {
              enable: true,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
          links: {
            enable: true,
            distance: 200,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "slow",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10,
              },
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.8,
            },
            repulse: {
              distance: 200,
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
            slow: {
              radius: 100,
              factor: 3,
            },
          },
        },
        background: {
          color: "#364652",
        },
      }}
    />
  ) : null;
};
