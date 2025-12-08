// src/hooks/useIsMobile.js
import { useState, useEffect } from 'react';

// Define the breakpoint for mobile devices
const MOBILE_BREAKPOINT = 768; 

/**
 * Custom hook to determine if the user is viewing the site on a mobile device.
 * It uses window.matchMedia for efficient detection.
 * @returns {boolean} True if the screen width is less than or equal to 768px.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    
    // Function to update the state based on the query match
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    // Initial check
    setIsMobile(mediaQuery.matches);

    // Add listener for changes (resizing the browser)
    mediaQuery.addListener(handleMediaQueryChange);

    // Cleanup function to remove the listener
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return isMobile;
}