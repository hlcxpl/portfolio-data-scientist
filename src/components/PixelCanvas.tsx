import { useEffect, useRef } from "react";

interface PixelCanvasProps {
    gap?: number;
    speed?: number;
    colors?: string[];
    noFocus?: boolean;
    className?: string;
}

export default function PixelCanvas({
    gap = 5,
    speed = 35,
    colors = ["#f8fafc", "#f1f5f9", "#cbd5e1"],
    noFocus = false,
    className = "",
}: PixelCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>();
    const isHovered = useRef(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let pixels: { x: number; y: number; baseX: number; baseY: number; color: string; size: number; active: number }[] = [];

        // Mouse state
        const mouse = { x: -1000, y: -1000 };

        const getColors = () => colors;

        const init = () => {
            const rect = container.getBoundingClientRect();
            width = rect.width;
            height = rect.height;

            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);

            pixels = [];
            const pixelSize = gap;
            const cols = Math.ceil(width / pixelSize);
            const rows = Math.ceil(height / pixelSize);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    pixels.push({
                        x: i * pixelSize,
                        y: j * pixelSize,
                        baseX: i * pixelSize,
                        baseY: j * pixelSize,
                        color: colors[Math.floor(Math.random() * colors.length)],
                        size: pixelSize,
                        active: 0 // 0 to 1, opacity level
                    });
                }
            }
        };

        const animate = () => {
            // Only animate if hovered or if there are active pixels fading out
            const hasActivePixels = pixels.some(p => p.active > 0.01);
            if (!isHovered.current && !hasActivePixels) {
                ctx.clearRect(0, 0, width, height);
                animationRef.current = requestAnimationFrame(animate);
                return;
                // We could stop the loop here, but keeping it running at low cost is safer for re-entry.
                // Actually, clearing and returning is very cheap.
            }

            ctx.clearRect(0, 0, width, height);

            const time = Date.now() * 0.001;

            pixels.forEach((pixel) => {
                // Floating effect
                pixel.x = pixel.baseX + Math.sin(time * 0.5 + pixel.baseX * 0.05) * 3;
                pixel.y = pixel.baseY + Math.cos(time * 0.3 + pixel.baseY * 0.05) * 3;

                // Distance to mouse
                const dx = mouse.x - (pixel.x + pixel.size / 2);
                const dy = mouse.y - (pixel.y + pixel.size / 2);
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Activation radius
                const radius = 80;

                if (dist < radius && isHovered.current) {
                    pixel.active = 1; // Fully active
                    // Randomize color on activation?
                    pixel.color = colors[Math.floor(Math.random() * colors.length)];
                } else {
                    // Decay
                    pixel.active *= 0.95; // Fade out speed
                }

                if (pixel.active > 0.01) {
                    ctx.fillStyle = pixel.color;
                    ctx.globalAlpha = pixel.active;
                    ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size);
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            isHovered.current = true;
        };

        const handleMouseLeave = () => {
            isHovered.current = false;
            mouse.x = -1000;
            mouse.y = -1000;
        };

        const handleMouseEnter = () => {
            isHovered.current = true;
        };

        // Resize observer
        const resizeObserver = new ResizeObserver(() => {
            init();
        });
        resizeObserver.observe(container);

        // Event listeners
        const target = container.parentElement || container;
        target.addEventListener("mousemove", handleMouseMove);
        target.addEventListener("mouseleave", handleMouseLeave);
        target.addEventListener("mouseenter", handleMouseEnter);

        init();
        animate();

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            resizeObserver.disconnect();
            target.removeEventListener("mousemove", handleMouseMove);
            target.removeEventListener("mouseleave", handleMouseLeave);
            target.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [gap, speed, colors, noFocus]);

    return (
        <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
            <canvas ref={canvasRef} className="block" />
        </div>
    );
}
