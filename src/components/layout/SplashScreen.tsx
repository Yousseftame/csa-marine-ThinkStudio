import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [startReveal, setStartReveal] = useState(false);

  useEffect(() => {
    // Start reveal animation after 2.2 seconds
    const revealTimer = setTimeout(() => {
      setStartReveal(true);
    }, 2200);

    // Completely remove from DOM after animations complete
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3800);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none">
      {/* Top Panel Reveal */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-1/2 bg-white pointer-events-auto"
        initial={{ y: 0 }}
        animate={{ y: startReveal ? "-100%" : 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
      />
      {/* Bottom Panel Reveal */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1/2 bg-white pointer-events-auto flex items-end justify-center pb-8"
        initial={{ y: 0 }}
        animate={{ y: startReveal ? "100%" : 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
      >
        <p className="text-navy/20 font-heading text-xs tracking-[0.3em] uppercase">
          Reborn for the Modern Era
        </p>
      </motion.div>

      {/* Center Content Wrapper */}
      <motion.div
        className="relative z-10 flex flex-col items-center pointer-events-auto"
        initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        animate={{ 
          opacity: startReveal ? 0 : 1, 
          scale: startReveal ? 1.15 : 1,
          filter: startReveal ? "blur(10px)" : "blur(0px)"
        }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <img 
            src="/logo.png" 
            alt="C.S.A Marine Logo" 
            className="w-64 md:w-80 h-auto object-contain mb-12 relative z-10"
          />
          
          {/* Elegant Loading Bar */}
          <div className="w-56 h-[2px] bg-gray-200 rounded-full overflow-hidden relative z-10">
            <motion.div
              className="h-full bg-navy"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
