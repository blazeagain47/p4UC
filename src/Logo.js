import React, { useEffect, useRef } from 'react';

const Logo = ({ className, width = 380, height = 260 }) => {
  const textPathRef = useRef(null);
  const currentWordRef = useRef(null);

  useEffect(() => {
    const words = ['uci ', 'ucr ', 'ucla ', 'ucsb ', 'biz ', 'ai '];
    let currentWordIndex = 0;
    let offset = -10;

    function animate() {
      offset += 0.2;
      if (offset > 110) {
        offset = -10;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        currentWordRef.current.textContent = words[currentWordIndex];
      }
      textPathRef.current.setAttribute('startOffset', `${offset}%`);
      let opacity = 1;
      if (offset < 0) {
        opacity = Math.pow((offset + 10) / 10, 2);
      } else if (offset > 100) {
        opacity = Math.pow(1 - (offset - 100) / 10, 2);
      }
      currentWordRef.current.setAttribute('opacity', opacity);
      requestAnimationFrame(animate);
    }

    currentWordRef.current.textContent = words[currentWordIndex];
    animate();
  }, []);

  return (
    <div className={`logo-container ${className}`}>
      <div className="text">projects4/</div>
      <svg width={width} height={height} viewBox="0 0 380 260">
        <defs>
          <path id="ringPathFront" d="M60 140 A140 45 0 0 1 340 140" transform="rotate(-15, 200, 140)" />
          <path id="ringPathBack" d="M340 140 A140 45 0 0 1 60 140" transform="rotate(-15, 200, 140)" />
          <linearGradient id="sphereGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:"#4FB0FF"}}/>
            <stop offset="100%" style={{stopColor:"#1E90FF"}}/>
          </linearGradient>
          <filter id="sphereShadow">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
          <filter id="ringShadow">
            <feDropShadow dx="1" dy="1" stdDeviation="1" floodOpacity="0.3"/>
          </filter>
          <filter id="textShadow">
            <feDropShadow dx="1" dy="1" stdDeviation="1" floodOpacity="0.5"/>
          </filter>
        </defs>
        
        <use href="#ringPathBack" fill="none" stroke="black" strokeWidth="40" filter="url(#ringShadow)"/>
        <circle cx="200" cy="130" r="100" fill="url(#sphereGradient)" filter="url(#sphereShadow)"/>
        <use href="#ringPathFront" fill="none" stroke="black" strokeWidth="40" filter="url(#ringShadow)"/>
        
        <text id="rotatingText" fill="white" fontSize="24" fontWeight="bold" filter="url(#textShadow)">
          <textPath href="#ringPathFront" ref={textPathRef} startOffset="0%">
            <tspan ref={currentWordRef}></tspan>
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default Logo;