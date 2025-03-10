import React, { useEffect, useRef } from "react";

const MouseParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.offsetWidth;
    let height = container.offsetHeight;
    let target = { x: width / 2, y: height / 2 };
    let animateHeader = true;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    
    canvas.width = width;
    canvas.height = height;

    let points: any[] = [];

    class Circle {
      pos: any;
      radius: number;
      color: string;
      active: number = 0;

      constructor(pos: any, radius: number, color: string) {
        this.pos = pos;
        this.radius = radius;
        this.color = color;
      }

      draw() {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(156,217,249,${this.active})`;
        ctx.fill();
      }
    }

    // Criar pontos apenas dentro da área do container
    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        let px = x + Math.random() * width / 20;
        let py = y + Math.random() * height / 20;
        let p = { x: px, originX: px, y: py, originY: py, closest: [] as any, circle: null as any };
        points.push(p);
      }
    }

    // Achar os 5 pontos mais próximos
    points.forEach((p1) => {
      let closest: any[] = [];
      points.forEach((p2) => {
        if (p1 !== p2) {
          closest.push(p2);
          closest.sort((a, b) => getDistance(p1, a) - getDistance(p1, b));
          closest.splice(5);
        }
      });
      p1.closest = closest;
    });

    // Criar círculos
    points.forEach((p) => {
      p.circle = new Circle(p, 2 + Math.random() * 2, "rgba(255,255,255,0.3)");
    });

    // Evento de mouse só dentro do container
    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
    });

    window.addEventListener("resize", () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    });

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        points.forEach((p) => {
          if (Math.abs(getDistance(target, p)) < 4000) {
            p.active = 0.3;
            p.circle.active = 0.6;
          } else if (Math.abs(getDistance(target, p)) < 20000) {
            p.active = 0.1;
            p.circle.active = 0.3;
          } else {
            p.active = 0;
            p.circle.active = 0;
          }
          drawLines(p);
          p.circle.draw();
        });
      }
      requestAnimationFrame(animate);
    }

    function drawLines(p: any) {
      if (!p.active) return;
      p.closest.forEach((closeP: any) => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(closeP.x, closeP.y);
        ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
        ctx.stroke();
      });
    }

    function getDistance(p1: any, p2: any) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    animate();

    return () => {
      container.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: "absolute", width: "100%", height: "100%" }}>
      <canvas ref={canvasRef} style={{ position: "relative", top: 0, left: 0, pointerEvents: "none", zIndex: 0 }} />
    </div>
  );
};

export default MouseParticles;
