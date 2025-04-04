
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  opacity: number;
  connections: number;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to fill the entire page
    const setCanvasDimensions = () => {
      canvas.width = document.documentElement.scrollWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY + window.scrollY // Account for scrolling
      };
    };

    // Initialize particles
    let particles: Particle[] = [];
    const createParticles = () => {
      const baseDensity = 1; // Base density factor
      const particleCount = Math.floor((canvas.width * canvas.height) / 20000 * baseDensity);
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1, // Varying dot sizes from 1-3px
          // Varying speeds for more organic movement
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          connections: 0
        });
      }
    };

    // Handle scroll events to update canvas position
    const handleScroll = () => {
      canvas.style.top = `${window.scrollY}px`;
    };

    // Animation loop
    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Connection parameters
      const connectionDistance = 170;
      const mouseInteractionRadius = 200;
      const maxConnections = 5; // Max connections per particle
      
      // Reset connection count for each particle
      particles.forEach(particle => {
        particle.connections = 0;
      });
      
      // Draw particles and update their positions
      particles.forEach(particle => {
        // Calculate distance to mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distanceToMouse = Math.sqrt(dx * dx + dy * dy);
        
        // Adjust opacity based on mouse proximity
        let particleOpacity = particle.opacity;
        if (distanceToMouse < mouseInteractionRadius) {
          particleOpacity = particle.opacity + (0.9 - particle.opacity) * (1 - distanceToMouse / mouseInteractionRadius);
        }
        
        // Draw the particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(80, 185, 75, ${particleOpacity})`;
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
      
      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        // Skip if this particle already has max connections
        if (particles[i].connections >= maxConnections) continue;
        
        for (let j = i + 1; j < particles.length; j++) {
          // Skip if the other particle already has max connections
          if (particles[j].connections >= maxConnections) continue;
          
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Determine if connection should be drawn
          let shouldConnect = false;
          let connectionOpacity = 0;
          
          // Base connection logic
          if (distance < connectionDistance) {
            shouldConnect = true;
            connectionOpacity = 0.1 * (1 - distance / connectionDistance);
          }
          
          // Enhanced connections near mouse
          const midpointX = (particles[i].x + particles[j].x) / 2;
          const midpointY = (particles[i].y + particles[j].y) / 2;
          const mouseToMidpoint = Math.sqrt(
            Math.pow(mouseRef.current.x - midpointX, 2) + 
            Math.pow(mouseRef.current.y - midpointY, 2)
          );
          
          if (mouseToMidpoint < mouseInteractionRadius) {
            shouldConnect = true;
            connectionOpacity = Math.max(
              connectionOpacity,
              0.15 * (1 - mouseToMidpoint / mouseInteractionRadius)
            );
          }
          
          // Draw connection if needed
          if (shouldConnect) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(80, 185, 75, ${connectionOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            
            // Count this connection for both particles
            particles[i].connections++;
            particles[j].connections++;
            
            // If a connection has high opacity (near mouse), add subtle glow
            if (connectionOpacity > 0.1) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(80, 185, 75, ${connectionOpacity * 0.4})`;
              ctx.lineWidth = 1.5;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
            
            // Exit if either particle reached max connections
            if (particles[i].connections >= maxConnections || 
                particles[j].connections >= maxConnections) {
              break;
            }
          }
        }
      }
      
      animationFrameId = window.requestAnimationFrame(render);
    };

    // Initialize
    window.addEventListener('resize', setCanvasDimensions);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    setCanvasDimensions();
    createParticles();
    render();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none" 
      style={{ position: 'absolute', top: 0, left: 0 }}
    />
  );
};

export default AnimatedBackground;
