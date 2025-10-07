import React, { useRef, useEffect } from 'react';

const ParticleCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 70;

        const resizeCanvas = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };
        resizeCanvas();

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;

            constructor(x: number, y: number, size: number, speedX: number, speedY: number) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.speedX = speedX;
                this.speedY = speedY;
            }

            update() {
                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
                this.x += this.speedX;
                this.y += this.speedY;
            }

            draw() {
                if(!ctx) return;
                ctx.fillStyle = '#64ffda';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                const size = Math.random() * 2 + 1;
                const x = Math.random() * (canvas.width - size * 2) + size;
                const y = Math.random() * (canvas.height - size * 2) + size;
                const speedX = (Math.random() * 0.4 - 0.2);
                const speedY = (Math.random() * 0.4 - 0.2);
                particles.push(new Particle(x, y, size, speedX, speedY));
            }
        };
        
        const connect = () => {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const distance = Math.sqrt(
                        (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
                        (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y)
                    );
                    if (distance < (canvas.width / 10)) {
                        opacityValue = 1 - (distance / (canvas.width/10));
                        ctx.strokeStyle = `rgba(100, 255, 218, ${opacityValue * 0.3})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };
        
        init();
        animate();

        window.addEventListener('resize', resizeCanvas);
        
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

const HeroSection: React.FC = () => {
  const handleScrollClick = () => {
    document.querySelector('#what-is')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-start relative !py-0">
      <ParticleCanvas />
      <div className="relative z-10 text-left animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-light-slate">
          Explorando <span className="text-neon-turquoise">t-SNE</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl text-slate">
          Una inmersión visual en el poderoso algoritmo para la reducción de dimensionalidad y visualización de datos.
        </p>
        <button onClick={handleScrollClick} className="mt-8 px-8 py-4 bg-transparent border-2 border-neon-turquoise text-neon-turquoise font-bold rounded-lg hover:bg-neon-turquoise/10 transition-all duration-300 animate-pulse-glow">
          Explorar ahora
        </button>
      </div>
    </section>
  );
};

export default HeroSection;