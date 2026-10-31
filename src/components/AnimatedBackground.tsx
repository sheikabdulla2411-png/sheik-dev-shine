import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string; text?: string;
    }> = [];

    const keywords = ["<SEO/>", "{rank}", "href", "meta", "schema", "404", "301", "<h1>", "robots.txt", "sitemap", "async", "const", "=>", "npm", "git"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const isSmall = window.innerWidth < 768;
      const count = Math.floor((canvas.width * canvas.height) / (isSmall ? 70000 : 25000));
      for (let i = 0; i < count; i++) {
        const isText = Math.random() > 0.6;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: isText ? 10 : Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.15 + 0.03,
          color: Math.random() > 0.5 ? "0, 245, 255" : "124, 58, 237",
          text: isText ? keywords[Math.floor(Math.random() * keywords.length)] : undefined,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        if (p.text) {
          ctx.font = `${p.size}px 'Syne', monospace`;
          ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
          ctx.fillText(p.text, p.x, p.y);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
          ctx.fill();
        }
      });
      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      particles.forEach(() => {});
      animate();
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
    window.addEventListener("resize", () => { resize(); createParticles(); });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
      <div className="fixed inset-0 z-0 pointer-events-none animate-gradient-mesh opacity-30"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, hsl(263 84% 52% / 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, hsl(183 100% 50% / 0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, hsl(263 84% 52% / 0.08) 0%, transparent 50%)",
        }}
      />
    </>
  );
};

export default AnimatedBackground;
