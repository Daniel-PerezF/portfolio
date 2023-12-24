import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Container } from "@tsparticles/engine";

const Particle = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };

  return init ? (
    <Particles
      className="particles"
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        name: "Star",
        particles: {
          number: {
            value: 10,
            density: {
              enable: false,
            },
          },
          color: {
            value: "#fff",
          },
          shape: {
            type: "circle",
            options: {
              star: {
                sides: 5,
              },
            },
          },
          opacity: {
            value: 0.8,
          },
          size: {
            value: 3,
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 600,
            color: "#ffffff",
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "bubble",
            },
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1,
                color: "#f00",
              },
            },
            bubble: {
              distance: 400,
              size: 10,
              duration: 2,
              opacity: 8,
              color: "#FFAD69",
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
          },
        },
        background: {
          color: "#364652",
        },
      }}
    />
  ) : null;
};

export default Particle;
