// src/hooks/useCanonical.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useCanonical() {
  const { pathname } = useLocation();
  useEffect(() => {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    const path = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
    link.href = "https://overallstyle.ma" + path;
  }, [pathname]);
}