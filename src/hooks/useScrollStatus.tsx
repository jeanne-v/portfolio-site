import { useEffect, useRef, useState } from "react";

export default function useScrollStatus<T extends HTMLElement>() {
  const [hasBeenScrolledIntoView, setHasBeenScrolledIntoView] = useState(false);
  const elementRef = useRef<T | null>(null);

  function handleScroll() {
    if (!elementRef.current) return;
    const top = elementRef.current.getBoundingClientRect().top;

    if (top <= window.innerHeight) {
      setHasBeenScrolledIntoView(true);
    }
  }

  useEffect(() => {
    if (!hasBeenScrolledIntoView) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasBeenScrolledIntoView]);

  return { hasBeenScrolledIntoView, elementRef };
}
