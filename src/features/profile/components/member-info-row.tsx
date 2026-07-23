import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type MemberInfoRowProps = {
  label: string;
  value: string;
};

export const MemberInfoRow = ({ label, value }: MemberInfoRowProps) => {
  return (
    <View className="border-b border-slate-200 pb-6">
      <Text className="uppercase tracking-[3px] text-[11px] text-amber-700">
        {label}
      </Text>
      <View className="flex-row justify-between items-center mt-2">
        <Text className="text-xl text-slate-800">{value}</Text>
        <MaterialCommunityIcons
          name="medal-outline"
          size={24}
          color="#94A3B8"
        />
      </View>
    </View>
  );
};
