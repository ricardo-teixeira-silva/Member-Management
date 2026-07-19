import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Text, View } from "react-native";

interface Props {
  total: number;
  growth?: string;
}

export function TotalMembersCard({ total, growth = "+12 este mês" }: Props) {
  return (
    <View className="bg-[#243D97] rounded-2xl px-5 py-5 overflow-hidden">
      <View className="absolute -bottom-6 -right-6 text-[110px] text-white/10">
        <MaterialCommunityIcons
          name="church-outline"
          size={120}
          color="#a4aed3"
        />
      </View>
      <View className="flex-row items-center justify-between">
        <FontAwesome5 name="users" size={24} color="white" />

        <View className="rounded-full bg-white/10 px-3 py-1">
          <Text className="text-[11px] font-medium text-white">{growth}</Text>
        </View>
      </View>
      <View className="mt-8">
        <Text className="text-xs uppercase tracking-widest text-white/70">
          TOTAL DE MEMBROS
        </Text>
        <Text className="mt-1 text-5xl font-extrabold text-white">
          {total.toLocaleString("pt-BR")}
        </Text>
      </View>
    </View>
  );
}
