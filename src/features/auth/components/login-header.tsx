import church from "@/shared/assets/images/church.png";
import { Image, Text, View } from "react-native";

export const LoginHeader = () => {
  return (
    <View className="flex-1 items-center pt-4">
      <Image source={church} className="w-48 h-48" />
      <View className="gap-1 items-center">
        <Text className="font-medium text-3xl">Paz do Senhor!</Text>
        <Text className="text-color_gray font-inter_regular text-sm text-center">
          Acesse sua conta para gerenciar os membros e as atividades da igreja.
        </Text>
      </View>
    </View>
  );
};
