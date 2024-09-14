import { useIntersectionObserver } from '../Hooks/useIntersectionObserver';

export function useAnimations() {
  return {
    fadeIn: useIntersectionObserver({ animationClass: 'fade-in' }),
    fadeInFromLeft: useIntersectionObserver({ animationClass: 'fade-in-from-left' }),
    fadeInFromRight: useIntersectionObserver({ animationClass: 'fade-in-from-right' }),
    fadeInFromTop: useIntersectionObserver({ animationClass: 'fade-in-from-top' }),
    fadeInFromBottom: useIntersectionObserver({ animationClass: 'fade-in-from-bottom' })
  };
}
