import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { View } from "react-native";
import { StatCard } from "./stat-card";

export const MenuStats = () => {
  return (
    <View className="gap-4">
      <View className="flex-row gap-4">
        <StatCard
          title="Pastores"
          value={4}
          icon={
            <MaterialCommunityIcons
              name="medal-outline"
              size={30}
              color="#8A5A00"
            />
          }
        />
        <StatCard
          title="Presbíteros"
          value={8}
          icon={<FontAwesome5 name="user-tie" size={30} color="#8A5A00" />}
        />
      </View>
      <View className="flex-row gap-4">
        <StatCard
          title="Diáconos (nisas)"
          value={24}
          icon={
            <MaterialCommunityIcons name="face-man" size={30} color="#8A5A00" />
          }
        />
        <StatCard
          title="Missionárias"
          value={24}
          icon={
            <MaterialCommunityIcons
              name="face-woman"
              size={30}
              color="#8A5A00"
            />
          }
        />
      </View>
      <View className="flex-row gap-4">
        <StatCard
          title="Membros"
          value={50}
          icon={<FontAwesome6 name="users" size={30} color="#8A5A00" />}
        />
        <StatCard
          title="Levitas"
          value={1}
          icon={
            <MaterialCommunityIcons
              name="account-music"
              size={30}
              color="#8A5A00"
            />
          }
        />
      </View>
    </View>
  );
};
