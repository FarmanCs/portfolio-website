"use client";

import { useEffect } from "react";

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor page load performance
    if (typeof window !== "undefined") {
      window.addEventListener("load", () => {
        const navigation = performance.getEntriesByType(
          "navigation"
        )[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const domContentLoaded =
          navigation.domContentLoadedEventEnd -
          navigation.domContentLoadedEventStart;

        console.log("Page Load Performance:", {
          totalLoadTime: `${loadTime}ms`,
          domContentLoaded: `${domContentLoaded}ms`,
          firstContentfulPaint:
            performance.getEntriesByName("first-contentful-paint")[0]
              ?.startTime || "N/A",
        });
      });
    }
  }, []);

  return null; // This component doesn't render anything
}
