"use client"

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useState } from 'react';
import { loadFull } from 'tsparticles';

const ParticlesContainer = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log("Particles loaded:", container);
    };

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            className="w-full h-4/5 absolute"
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false },
                background: {
                    color: { value: '' }
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: { enable: true, mode: 'push' },
                        onHover: { enable: true, mode: 'repulse' },
                        resize: true
                    },
                    modes: {
                        push: { quantity: 4 },
                        repulse: { distance: 200, duration: 0.4 }
                    }
                },
                particles: {
                    color: { value: "#ff6600" },
                    links: {
                        color: "#cf8c65",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    collisions: { enable: true },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: { default: 'bounce' },
                        speed: 1
                    },
                    number: {
                        density: { enable: true, area: 800 },
                        value: 80
                    },
                    opacity: { value: 0.5 },
                    shape: { type: 'circle' },
                    size: { value: { min: 1, max: 5 } }
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesContainer;
