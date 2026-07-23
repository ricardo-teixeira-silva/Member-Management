import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

type PhotoPickerProps = {
  image?: string;
  onPress: () => void;
};

export const PhotoPicker = ({ image, onPress }: PhotoPickerProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="items-center gap-3"
    >
      <View className="relative">
        <View className="h-36 w-36 overflow-hidden rounded-full border-4 border-indigo-100 bg-indigo-50 items-center justify-center">
          {image ? (
            <Image source={{ uri: image }} className="h-full w-full" />
          ) : (
            <MaterialCommunityIcons name="account" size={70} color="#4338CA" />
          )}
        </View>
        <View className="absolute bottom-1 right-1 h-12 w-12 rounded-full bg-indigo-700 items-center justify-center border-4 border-white">
          <MaterialCommunityIcons name="camera" size={22} color="#FFF" />
        </View>
      </View>
      <Text className="font-inter_bold text-indigo-700">Adicionar foto</Text>
      <Text className="text-center text-sm text-gray-500">
        Toque para selecionar uma imagem
      </Text>
    </TouchableOpacity>
  );
};
