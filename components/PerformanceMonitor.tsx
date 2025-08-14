"use client";

import { useEffect } from "react";

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window !== "undefined" && typeof performance !== "undefined") {
      const handleLoad = () => {
        try {
          const navigation = performance.getEntriesByType(
            "navigation"
          )[0] as PerformanceNavigationTiming;
          if (navigation) {
            const loadTime =
              navigation.loadEventEnd - navigation.loadEventStart;
            const domContentLoaded =
              navigation.domContentLoadedEventEnd -
              navigation.domContentLoadedEventStart;

            console.log("Page Load Performance:", {
              totalLoadTime: `${loadTime}ms`,
              domContentLoaded: `${domContentLoaded}ms`,
            });
          }
        } catch (error) {
          console.log("Performance monitoring error:", error);
        }
      };

      window.addEventListener("load", handleLoad);

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  return null; // This component doesn't render anything
}
