import { useEffect } from 'react';

const useSwipe = (ref, onSwipeLeft, onSwipeRight) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let startX;
    let startY;

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
    };

    const handleTouchEnd = (e) => {
      const touch = e.changedTouches[0];
      const endX = touch.clientX;
      const endY = touch.clientY;

      const deltaX = endX - startX;
      const deltaY = endY - startY;
        console.log('deltax', deltaX)
        console.log('endX', endX)
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (deltaX > 0) {
          // Swipe right
          if (onSwipeRight) onSwipeRight();
        } else {
          // Swipe left
          if (onSwipeLeft) onSwipeLeft();
        }
      }
    };

    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchend', handleTouchEnd);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [ref, onSwipeLeft, onSwipeRight]);
};

export default useSwipe;
