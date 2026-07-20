import { Text, TouchableOpacity, View } from "react-native";
import { QuickActionProps } from "./quick-actions";

export const QuickActionItem = ({ title, icon, onPress }: QuickActionProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="h-40 w-[48%] items-center justify-center rounded-3xl border border-slate-200 bg-white p-5"
    >
      <View className="mb-4 h-16 w-16 items-center justify-center rounded-full bg-blue-50">
        {icon}
      </View>

      <Text className="text-center font-inter_semibold text-base leading-6 text-slate-700">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
