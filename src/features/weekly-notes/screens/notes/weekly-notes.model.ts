import { router } from "expo-router";

export const useWeeklyNotesModel = () => {
  const goBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/dashboard");
    }
  };

  return { goBack };
};
