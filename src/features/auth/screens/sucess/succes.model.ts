import { useEffect } from "react";

export const useSuccess = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      //router.replace("/(tabs)/dashboard");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
};
