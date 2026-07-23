import bibleAnimation from "@/shared/assets/animations/bible.json";
import { LottieAnimation } from "@/shared/componentes";
import { ActivityIndicator, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSuccess } from "./succes.model";

export default function Success() {
  useSuccess();

  return (
    <SafeAreaView className="flex-1 bg-[#F4F8FF] p-6">
      <View className="flex-1 items-center justify-center gap-6">
        <View className="items-center justify-center">
          <LottieAnimation source={bibleAnimation} width={250} height={250} />
        </View>
        <View className="w-[80%] items-center justify-center gap-6">
          <Text className="text-color_silver font-medium text-base text-center">
            Login realizado com sucesso. Estamos preparando sua área de
            trabalho.
          </Text>
          <View className="flex-row gap-1">
            <ActivityIndicator size="small" color="#3366FF" />
            <Text className="font-semibold text-color_blue">
              Redirecionando...
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
