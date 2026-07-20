import { Header } from "@/shared/componentes/navigation/components/headers/header-profile";
import { Stack } from "expo-router";

export default function WeeklyNotesLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <Header />,
      }}
    />
  );
}
