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
  validPeriod?: { start: Date; end: Date };
  setNotes: (notes: WeeklyNote[]) => void;
  setValidPeriod: (period: { start: Date; end: Date }) => void;
};

export const useWeeklyNotesStore = create<WeeklyNotesState>((set) => ({
  notes: [],
  validPeriod: undefined,
  setNotes: (notes) => set({ notes }),
  setValidPeriod: (period) => set({ validPeriod: period }),
}));
