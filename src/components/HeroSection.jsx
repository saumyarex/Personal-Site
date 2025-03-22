import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const canvasRef = useRef(null);

  // Animated background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(${Math.floor(Math.random() * 50 + 50)}, ${Math.floor(
          Math.random() * 100 + 100
        )}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.5})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particle array
    const particles = [];
    const particleCount = Math.min(
      100,
      Math.floor((canvas.width * canvas.height) / 10000)
    );

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation function
    const animate = () => {
      ctx.fillStyle = "rgba(16, 24, 39, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Connect particles with lines
      connectParticles();

      animationFrameId = requestAnimationFrame(animate);
    };

    // Connect particles within a certain distance
    function connectParticles() {
      const maxDistance = 150;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(100, 150, 255, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="w-full relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 bg-gray-900" />

      {/* Content overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90" />

      {/* Hero content */}
      <div className="container mx-auto px-6 z-10 text-center md:text-left">
        <div className="md:max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Hi! I'am Saumya
            </span>
            <br />
            Frontend Developer
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Building Digital Products
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border-2 border-gray-300 text-white font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-400 mb-2">Scroll Down</span>
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
