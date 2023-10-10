import { useState, useEffect } from "react";

const useCheckDesktopScreen = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, []);

  return width >= 1280;
};

export default useCheckDesktopScreen;
