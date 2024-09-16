import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // iPad'i de içerecek şekilde kontrol
    const isIPad =
      /iPad|Macintosh/i.test(userAgent) && 'ontouchend' in document;

    // Mobil cihazlar için yaygın user agent kontrolleri
    if (/android/i.test(userAgent)) {
      setIsMobile(true);
    } else if (/iPhone|iPod/i.test(userAgent) || isIPad) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return isMobile;
};

export default useIsMobile;
