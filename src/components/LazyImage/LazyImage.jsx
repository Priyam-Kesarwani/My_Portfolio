import React, { useState, useRef, useEffect } from "react";

/**
 * LazyImage — A performant image component with:
 * - IntersectionObserver-based lazy loading (defers off-screen images)
 * - Blur-up placeholder effect for smooth perceived loading
 * - Native `loading="lazy"` + `decoding="async"` as fallback
 * - Graceful fade-in transition on load
 *
 * Props:
 *   src       — Image source URL (required)
 *   alt       — Alt text (required)
 *   className — CSS classes for the <img> element
 *   rootMargin — IntersectionObserver rootMargin (default: "200px")
 *                Controls how early the image starts loading before entering viewport
 *   ...rest   — Any other props passed to the underlying <img>
 */
const LazyImage = ({ src, alt, className = "", rootMargin = "200px", ...rest }) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const node = imgRef.current;
    if (!node) return;

    // If IntersectionObserver is not supported, load immediately
    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(node);
        }
      },
      {
        rootMargin, // Start loading 200px before entering viewport
        threshold: 0,
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [rootMargin]);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${rest.wrapperClassName || ""}`}>
      {/* Blur placeholder — visible until image loads */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-800/60 backdrop-blur-sm animate-pulse rounded-inherit"
          aria-hidden="true"
        />
      )}

      {/* Actual image — only starts downloading when in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          {...rest}
        />
      )}
    </div>
  );
};

export default LazyImage;
