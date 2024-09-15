import { useEffect, useRef } from 'react';

export function useIntersectionObserver(options = {}) {
  const elementRefs = useRef([]);
  const { threshold = 0.1, rootMargin = '0px', animationClass } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          }
        });
      },
      { threshold, rootMargin }
    );

    elementRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      elementRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [animationClass, threshold, rootMargin]);

  const addElementRef = (el) => {
    if (el && !elementRefs.current.includes(el)) {
      elementRefs.current.push(el);
    }
  };

  return addElementRef;
}