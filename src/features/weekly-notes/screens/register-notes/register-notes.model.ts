import { useWeeklyNotesStore } from "@/shared/store/weeklyNotes";
import { router } from "expo-router";

export const useRegisterNotesModel = () => {
  const setNotes = useWeeklyNotesStore((state) => state.setNotes);

  const saveNotes = (data: any, highlightDays: Record<string, boolean>) => {
    const notes = [
      {
        day: "2ª",
        weekDay: "FEIRA",
        title: data["2ª_feira_culto"],
        subtitle: data["2ª_feira_grupo"],
        highlight: highlightDays["2ª_feira"] || false,
      },
      {
        day: "3ª",
        weekDay: "FEIRA",
        title: data["3ª_feira_culto"],
        subtitle: data["3ª_feira_grupo"],
        highlight: highlightDays["3ª_feira"] || false,
      },
      {
        day: "4ª",
        weekDay: "FEIRA",
        title: data["4ª_feira_culto"],
        subtitle: data["4ª_feira_grupo"],
        highlight: highlightDays["4ª_feira"] || false,
      },
      {
        day: "5ª",
        weekDay: "FEIRA",
        title: data["5ª_feira_culto"],
        subtitle: data["5ª_feira_grupo"],
        highlight: highlightDays["5ª_feira"] || false,
      },
      {
        day: "6ª",
        weekDay: "FEIRA",
        title: data["6ª_feira_culto"],
        subtitle: data["6ª_feira_grupo"],
        highlight: highlightDays["6ª_feira"] || false,
      },
      {
        day: "SAB",
        weekDay: "FIM SEM",
        title: data["sab_culto"],
        subtitle: data["sab_grupo"],
        highlight: highlightDays["sab"] || false,
      },
      {
        day: "DOM",
        weekDay: "CELEBRE",
        title: data["dom_culto"],
        subtitle: data["dom_grupo"],
        highlight: highlightDays["dom"] || false,
      },
    ];

    setNotes(notes);
    router.navigate("/(stack)/weekly-notes");
  };

  return { saveNotes };
};
