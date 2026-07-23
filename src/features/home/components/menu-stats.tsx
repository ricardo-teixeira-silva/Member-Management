import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { View } from "react-native";
import { StatCard } from "./stat-card";

type MenuStatsProps = {
  totalMembers: number;
  pastors: number;
  presbyters: number;
  deacons: number;
  missionaries: number;
};

export const MenuStats = ({
  totalMembers,
  pastors,
  presbyters,
  deacons,
  missionaries,
}: MenuStatsProps) => {
  const stats = [
    {
      title: "Pastores",
      value: pastors,
      icon: (
        <MaterialCommunityIcons
          name="medal-outline"
          size={30}
          color="#8A5A00"
        />
      ),
    },
    {
      title: "Presbíteros",
      value: presbyters,
      icon: <FontAwesome5 name="user-tie" size={30} color="#8A5A00" />,
    },
    {
      title: "Diáconos(as)",
      value: deacons,
      icon: (
        <MaterialCommunityIcons name="face-man" size={30} color="#8A5A00" />
      ),
    },
    {
      title: "Missionárias",
      value: missionaries,
      icon: (
        <MaterialCommunityIcons name="face-woman" size={30} color="#8A5A00" />
      ),
    },
    {
      title: "Membros",
      value: totalMembers,
      icon: <FontAwesome6 name="users" size={30} color="#8A5A00" />,
    },
  ];

  return (
    <View className="flex-row flex-wrap justify-between">
      {stats.map((item) => (
        <StatCard
          key={item.title}
          title={item.title}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </View>
  );
};
