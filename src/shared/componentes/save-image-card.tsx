import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

type SaveImageCardProps = {
  onPress: () => void;
};

export const SaveImageCard = ({ onPress }: SaveImageCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="rounded-2xl border-2 border-dashed border-indigo-200 bg-indigo-50"
    >
      <View className="items-center justify-center gap-4 px-6 py-8">
        <View className="h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
          <Feather name="image" size={30} color="#4338CA" />
        </View>
        <View className="items-center gap-1">
          <Text className="font-inter_bold text-lg text-indigo-700">
            Gerar imagem
          </Text>
          <Text className="text-center font-inter_regular text-sm text-gray-500">
            Salve uma imagem do cadastro para compartilhar ou arquivar.
          </Text>
        </View>
        <View className="mt-2 flex-row items-center gap-2 rounded-full bg-indigo-700 px-5 py-3">
          <Feather name="download" size={18} color="#FFF" />

          <Text className="font-inter_bold text-white">Salvar imagem</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
