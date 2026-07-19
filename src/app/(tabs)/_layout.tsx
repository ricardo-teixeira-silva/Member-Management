import { CustomTabBar } from "@/shared/componentes/navigation";
import { Header } from "@/shared/componentes/navigation/components/headers/header-profile";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ tabBarStyle: { display: "none" } }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{ title: "Início", header: () => <Header /> }}
      />
      <Tabs.Screen
        name="register"
        options={{ title: "Registro", header: () => <Header /> }}
      />
      <Tabs.Screen
        name="members"
        options={{ title: "Membros", header: () => <Header /> }}
      />
      <Tabs.Screen
        name="attendance"
        options={{ title: "Presença", header: () => <Header /> }}
      />
    </Tabs>
  );
}
