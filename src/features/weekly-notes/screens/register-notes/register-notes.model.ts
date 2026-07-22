import { useWeeklyNotesStore } from "@/shared/store/weeklyNotes";
import { router } from "expo-router";

export const useRegisterNotesModel = () => {
  const setNotes = useWeeklyNotesStore((state) => state.setNotes);
  const setValidPeriod = useWeeklyNotesStore((state) => state.setValidPeriod);

  const DEFAULT_CULTO = "Sem programação";
  const DEFAULT_GRUPO = "Não foi escalado grupos ou obreiros";

  const withDefaults = (value: unknown, fallback: string) => {
    const trimmed = typeof value === "string" ? value.trim() : "";
    return trimmed || fallback;
  };

  const saveNotes = (
    data: any,
    highlightDays: Record<string, boolean>,
    validPeriod: { start: Date; end: Date },
  ) => {
    const buildNote = (
      day: string,
      weekDay: string,
      key: string,
    ) => ({
      day,
      weekDay,
      title: withDefaults(data[`${key}_culto`], DEFAULT_CULTO),
      subtitle: withDefaults(data[`${key}_grupo`], DEFAULT_GRUPO),
      highlight: highlightDays[key] || false,
    });

    const notes = [
      buildNote("2ª", "FEIRA", "2ª_feira"),
      buildNote("3ª", "FEIRA", "3ª_feira"),
      buildNote("4ª", "FEIRA", "4ª_feira"),
      buildNote("5ª", "FEIRA", "5ª_feira"),
      buildNote("6ª", "FEIRA", "6ª_feira"),
      buildNote("SAB", "FIM SEM", "sab"),
      buildNote("DOM", "CELEBRE", "dom"),
    ];

    setNotes(notes);
    setValidPeriod(validPeriod);
    router.navigate("/(stack)/weekly-notes");
  };

  return { saveNotes };
};
