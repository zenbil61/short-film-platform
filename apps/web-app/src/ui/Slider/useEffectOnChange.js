import { useEffect, useRef } from 'react';

function useEffectOnChange(effect, deps) {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) {
      effect();
    } else {
      hasMounted.current = true;
    }
  }, deps); // Bağımlılıklar değiştiğinde çalışır
}

export default useEffectOnChange;
