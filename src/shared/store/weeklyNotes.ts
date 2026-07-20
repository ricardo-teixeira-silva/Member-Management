import { create } from "zustand";

export type WeeklyNote = {
  day: string;
  weekDay: string;
  title: string;
  subtitle: string;
  highlight?: boolean;
};

type WeeklyNotesState = {
  notes: WeeklyNote[];
  setNotes: (notes: WeeklyNote[]) => void;
};

export const useWeeklyNotesStore = create<WeeklyNotesState>((set) => ({
  notes: [],
  setNotes: (notes) => set({ notes }),
}));
