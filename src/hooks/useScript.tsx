import { useEffect } from "react";

const useScript = (src: string, async: boolean = true): void => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = async;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src, async]);
};

export default useScript;
