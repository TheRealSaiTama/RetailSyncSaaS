import { useEffect, useRef } from 'react';
import './LogoScroller.css';

// Import images
import accentureLogo from '../assets/accenture.png';
import bikanerLogo from '../assets/bikaner.png';
import haldiramLogo from '../assets/haldiram.png';

interface LogoScrollerProps {
  speed?: number;
  height?: number;
}

const LogoScroller = ({ speed = 30, height = 120 }: LogoScrollerProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  
  // Optional: Add a custom animation based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (trackRef.current) {
        const scrollY = window.scrollY;
        const rotationY = scrollY * 0.05; // Adjust multiplier for rotation intensity
        trackRef.current.style.transform = `perspective(1000px) rotateX(${scrollY * 0.01}deg)`;
        
        // Apply different transformations to each logo for added 3D effect
        const logos = trackRef.current.querySelectorAll('.logo');
        logos.forEach((logo, index) => {
          const element = logo as HTMLElement;
          element.style.transform = `translateZ(${10 + (index % 3) * 5}px) rotateY(${rotationY + index * 2}deg)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="logo-banner-container" style={{ height: `${height}px` }}>
      <div className="logo-track" ref={trackRef} style={{ animationDuration: `${speed}s` }}>
        {/* First set of logos */}
        <div className="logo">
          <img src={accentureLogo} alt="Accenture" />
        </div>
        <div className="logo">
          <img src={bikanerLogo} alt="Bikanervala" />
        </div>
        <div className="logo">
          <img src={haldiramLogo} alt="Haldiram's" />
        </div>
        
        {/* Duplicate logos for seamless loop */}
        <div className="logo">
          <img src={accentureLogo} alt="Accenture" />
        </div>
        <div className="logo">
          <img src={bikanerLogo} alt="Bikanervala" />
        </div>
        <div className="logo">
          <img src={haldiramLogo} alt="Haldiram's" />
        </div>
        
        {/* Another set for longer tracks */}
        <div className="logo">
          <img src={accentureLogo} alt="Accenture" />
        </div>
        <div className="logo">
          <img src={bikanerLogo} alt="Bikanervala" />
        </div>
        <div className="logo">
          <img src={haldiramLogo} alt="Haldiram's" />
        </div>
      </div>
    </div>
  );
};

export default LogoScroller; 