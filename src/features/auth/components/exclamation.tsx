import Feather from "@expo/vector-icons/Feather";
import { View } from "react-native";

export const Exclamation = () => {
  return (
    <View className="bg-[#FFDAD6] w-16 h-16 items-center justify-center rounded-full">
      <Feather name="alert-octagon" size={24} color="red" />
    </View>
  );
};
