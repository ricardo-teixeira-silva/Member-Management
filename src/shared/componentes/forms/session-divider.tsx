import { Text, View } from "react-native";

export const SectionDivider = () => {
  return (
    <View className="flex-row items-center justify-center w-full my-4">
      <View className="flex-1 h-[1px] bg-[#DADCE0]" />
      <Text className="mx-3 text-[#8C8C8C] text-xs tracking-[2px] font-semibold">
        CONFIRMAÇÃO DE DADOS
      </Text>
      <View className="flex-1 h-[1px] bg-[#DADCE0]" />
    </View>
  );
};
