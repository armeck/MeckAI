import React, { useEffect, useRef } from 'react';

interface PipelineNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulseOffset: number;
}

export const NeuralCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    const nodes: PipelineNode[] = [];

    const initNodes = () => {
      nodes.length = 0;
      const count = Math.min(Math.max(Math.floor((width * height) / 16000), 28), 55);
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 2 + 1.8,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    const updateDimensions = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      const rect = parent?.getBoundingClientRect();
      const newWidth = Math.floor(rect?.width || parent?.clientWidth || window.innerWidth || 800);
      const newHeight = Math.floor(rect?.height || parent?.clientHeight || 600);

      const effectiveHeight = newHeight > 100 ? newHeight : 600;

      if (width !== newWidth || height !== effectiveHeight) {
        width = canvas.width = newWidth;
        height = canvas.height = effectiveHeight;
        if (nodes.length === 0 || Math.abs(nodes.length - Math.min(Math.max(Math.floor((width * height) / 16000), 28), 55)) > 15) {
          initNodes();
        }
      }
    };

    updateDimensions();
    initNodes();

    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener('resize', handleResize);

    let resizeObserver: ResizeObserver | null = null;
    if (canvas.parentElement && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateDimensions();
      });
      resizeObserver.observe(canvas.parentElement);
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
      } else {
        mouseX = -1000;
        mouseY = -1000;
      }
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const connectionDistance = 160;
    let step = 0;

    const render = () => {
      if (width === 0 || height === 0) {
        updateDimensions();
      }

      ctx.clearRect(0, 0, width, height);
      step += 0.02;

      const isDark = document.documentElement.classList.contains('dark');

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;

        if (n1.x < 0) {
          n1.x = 0;
          n1.vx = Math.abs(n1.vx);
        } else if (n1.x > width) {
          n1.x = width;
          n1.vx = -Math.abs(n1.vx);
        }

        if (n1.y < 0) {
          n1.y = 0;
          n1.vy = Math.abs(n1.vy);
        } else if (n1.y > height) {
          n1.y = height;
          n1.vy = -Math.abs(n1.vy);
        }

        // Mouse avoidance/influence
        const dx = mouseX - n1.x;
        const dy = mouseY - n1.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 110 && dist > 0) {
          const force = (110 - dist) / 110;
          n1.x -= (dx / dist) * force * 1.5;
          n1.y -= (dy / dist) * force * 1.5;
        }

        // Draw node dot
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? 'rgba(96, 165, 250, 0.85)'
          : 'rgba(37, 99, 235, 0.75)';
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const d = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          if (d < connectionDistance) {
            const alpha = 1 - d / connectionDistance;

            // Connecting pipeline line
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = isDark
              ? `rgba(147, 197, 253, ${alpha * 0.28})`
              : `rgba(37, 99, 235, ${alpha * 0.22})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();

            // Animated packet pulse along pipeline connection
            const pulsePos = (Math.sin(step + n1.pulseOffset) + 1) / 2;
            const px = n1.x + (n2.x - n1.x) * pulsePos;
            const py = n1.y + (n2.y - n1.y) * pulsePos;

            ctx.beginPath();
            ctx.arc(px, py, 1.4, 0, Math.PI * 2);
            ctx.fillStyle = isDark
              ? `rgba(224, 231, 255, ${alpha * 0.9})`
              : `rgba(29, 78, 216, ${alpha * 0.8})`;
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
};
