import { Text, TouchableOpacity, View } from "react-native";

export const LoginFooter = () => {
  return (
    <View className="flex-row gap-1 items-center justify-center">
      <Text className="font-inter_regular text-sm text-color_gray">
        Não tem uma conta?
      </Text>
      <TouchableOpacity>
        <Text className="font-inter_bold text-sm text-color_blue">
          Cadastre-se
        </Text>
      </TouchableOpacity>
    </View>
  );
};
