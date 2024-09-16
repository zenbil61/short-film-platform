import { useRef, useEffect } from 'react';

// Hook tanımı
function usePreviousState(value) {
  // useRef, bir değer saklamak için kullanılır
  const ref = useRef();

  // useEffect, bağımlılıklar değiştiğinde çalışır
  useEffect(() => {
    ref.current = value; // Güncel değeri sakla
  }, [value]); // value değiştiğinde güncellenir

  return ref.current; // Önceki değeri döndür
}

export default usePreviousState;
