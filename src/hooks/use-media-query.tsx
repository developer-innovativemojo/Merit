
import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    // Check if we're in a browser environment first
    if (typeof window === 'undefined') {
      return;
    }
    
    // Set initial value
    const media = window.matchMedia(query);
    setMatches(media.matches);
    
    // Define listener function
    const updateMatches = () => {
      setMatches(media.matches);
    };
    
    // Add event listener using the modern API if available
    if (media.addEventListener) {
      media.addEventListener('change', updateMatches);
      return () => media.removeEventListener('change', updateMatches);
    } else {
      // Legacy support for older browsers
      media.addListener(updateMatches);
      return () => media.removeListener(updateMatches);
    }
  }, [query]);
  
  return matches;
}
