import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { MemberWithPhoto } from "../types/members";

type CurrentMemberState = {
  member: MemberWithPhoto | null;
  setMember: (member: MemberWithPhoto) => void;
  clearMember: () => void;
};

export const useCurrentMember = create<CurrentMemberState>()(
  persist(
    (set) => ({
      member: null,
      setMember: (member) => set({ member }),
      clearMember: () => set({ member: null }),
    }),
    {
      name: "current-member",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
