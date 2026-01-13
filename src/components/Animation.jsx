import React, { useEffect, useState, useRef } from 'react';

const Animation = ({ onAnimationComplete }) => {
    const [sparkles, setSparkles] = useState([]);
    const [fireworks, setFireworks] = useState([]);
    const tinkerbellRef = useRef(null);
    const animationFrameRef = useRef(null);
    const lastSparkleTimeRef = useRef(0);

    useEffect(() => {
        tinkerbellRef.current = document.getElementById('tinkerbell');
        const tinkerbell = tinkerbellRef.current;

        if (tinkerbell) {
            const handleAnimationEnd = () => {
                // Create a burst of fireworks
                for (let i = 0; i < 150; i++) {
                    const angle = Math.random() * 360;
                    const distance = Math.random() * 200;
                    const newFirework = {
                        id: Date.now() + i,
                        style: {
                            top: '50%',
                            left: '50%',
                            transform: `rotate(${angle}deg) translateX(${distance}px)`,
                        },
                    };
                    setFireworks((prevFireworks) => [...prevFireworks, newFirework]);
                }

                setTimeout(() => {
                    if (onAnimationComplete) {
                        onAnimationComplete();
                    }
                }, 1500); // wait for firework animation to finish
            };

            tinkerbell.addEventListener('animationend', handleAnimationEnd);

            const animateSparkles = (timestamp) => {
                if (timestamp - lastSparkleTimeRef.current > 50) {
                    lastSparkleTimeRef.current = timestamp;
                    const tinkerbellRect = tinkerbell.getBoundingClientRect();
                    for (let i = 0; i < 5; i++) {
                        const newSparkle = {
                            id: Date.now() + i,
                            style: {
                                top: tinkerbellRect.top + Math.random() * tinkerbellRect.height,
                                left: tinkerbellRect.left + Math.random() * tinkerbellRect.width,
                            },
                        };
                        setSparkles((prevSparkles) => [...prevSparkles, newSparkle]);
                    }

                    setTimeout(() => {
                        setSparkles((prevSparkles) => prevSparkles.slice(5));
                    }, 1500);
                }
                animationFrameRef.current = requestAnimationFrame(animateSparkles);
            };

            animationFrameRef.current = requestAnimationFrame(animateSparkles);


            return () => {
                tinkerbell.removeEventListener('animationend', handleAnimationEnd);
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
            };
        }
    }, [onAnimationComplete]);

    return (
        <div className="animation-container">
            <div id="tinkerbell"></div>
            {sparkles.map((sparkle) => (
                <div key={sparkle.id} className="sparkle" style={sparkle.style}></div>
            ))}
            {fireworks.map((firework) => (
                <div key={firework.id} className="firework" style={firework.style}></div>
            ))}
        </div>
    );
};

export default Animation;
