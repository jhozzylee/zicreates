import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const isHome = location.pathname === "/";

    // Only handle scroll if we're on the home page
    if (isHome) {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      } else {
        // Scroll to top if no hash
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHash;
