import { View } from "react-native";
import { stats } from "../utils/stats";
import { StatCard } from "./stat-card";

export const MenuStats = () => {
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
