'use client';

import { useEffect } from 'react';

export function CursorTrail() {
  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const DOT_COUNT = 8;
    const dots: { el: HTMLDivElement; x: number; y: number }[] = [];

    // Brand gradient: Hot Coral / Sunset Red (#fd5b38) -> Warm Amber (#f59e0b) -> Soft Violet (#818cf8)
    const trailColors = [
      [253, 91, 56],   // #fd5b38 pure coral
      [253, 105, 72],  // slightly softer coral
      [254, 130, 95],  // coral peach
      [251, 146, 60],  // orange 400
      [245, 158, 11],  // amber 500
      [217, 119, 6],   // deep amber
      [168, 85, 247],  // purple 500
      [129, 140, 248], // indigo/blue accent
    ];

    const container = document.createElement('div');
    container.id = 'cursor-trail-container';
    container.setAttribute('aria-hidden', 'true');
    document.body.appendChild(container);

    for (let i = 0; i < DOT_COUNT; i++) {
      const dot = document.createElement('div');
      dot.className = 'cursor-dot';
      const progress = i / (DOT_COUNT - 1);
      const size = i === 0 ? 14 : 7 - progress * 3.8; // Lead dot is 14px with luminous nested glow
      const opacity = i === 0 ? 1 : 0.9 - progress * 0.55;
      const [r, g, b] = trailColors[i];

      if (i === 0) {
        // Lead glowing cursor: Crisp luminous concentric core with light border and high-contrast ambient aura
        // Visible on both deep black background and bright orange/coral buttons
        dot.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: radial-gradient(circle, #ffffff 18%, #c4b5fd 40%, #fd5b38 85%);
          border: 1.5px solid rgba(255, 255, 255, 0.85);
          box-shadow: 0 0 0 1.5px rgba(0, 0, 0, 0.45), 0 0 16px 5px rgba(253, 91, 56, 0.7), 0 0 28px 10px rgba(253, 91, 56, 0.3);
          pointer-events: none;
          z-index: 999999;
          will-change: transform;
          transform: translate(-100px, -100px);
          opacity: 0;
          transition: opacity 0.2s ease;
        `;
      } else {
        // Trailing chromatic dots
        dot.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          background: rgba(${r}, ${g}, ${b}, ${opacity.toFixed(2)});
          border: 0.5px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2), 0 0 ${8 - progress * 5}px rgba(${r}, ${g}, ${b}, ${0.7 - progress * 0.4});
          pointer-events: none;
          z-index: 999998;
          will-change: transform;
          transform: translate(-100px, -100px);
          opacity: 0;
          transition: opacity 0.2s ease;
        `;
      }

      container.appendChild(dot);
      dots.push({ el: dot, x: -100, y: -100 });
    }

    let mouseX = -100;
    let mouseY = -100;
    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        // Snap immediately to mouse position on first entrance
        dots.forEach((d) => {
          d.x = mouseX;
          d.y = mouseY;
          d.el.style.opacity = '1';
        });
      }
    };

    // Keep visible at all times unless the mouse literally exits the entire browser window
    const onMouseLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        dots.forEach((d) => (d.el.style.opacity = '0'));
        isVisible = false;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);

    let animationFrameId: number;

    const animateTrail = () => {
      if (isVisible) {
        // Precise lead cursor tracking directly on mouse pointer
        dots[0].x += (mouseX - dots[0].x) * 0.75;
        dots[0].y += (mouseY - dots[0].y) * 0.75;

        // Fluid trailing dots that gracefully converge when still and trail when moving
        for (let i = 1; i < DOT_COUNT; i++) {
          const ease = Math.max(0.12, 0.35 - i * 0.03);
          dots[i].x += (dots[i - 1].x - dots[i].x) * ease;
          dots[i].y += (dots[i - 1].y - dots[i].y) * ease;
        }

        dots.forEach((d) => {
          const s = parseFloat(d.el.style.width);
          d.el.style.transform = `translate3d(${d.x - s / 2}px, ${d.y - s / 2}px, 0)`;
        });
      }

      animationFrameId = requestAnimationFrame(animateTrail);
    };

    animationFrameId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
      if (container.parentElement) {
        container.remove();
      }
    };
  }, []);

  return null;
}
