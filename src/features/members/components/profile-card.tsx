import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type ProfileCardProps = {
  name: string;
  position: string;
  url: string;
  sex: string;
};

export const ProfileCard = ({ name, position, url, sex }: ProfileCardProps) => {
  const [checked, setChecked] = useState(false);

  const sexColor =
    sex === "Masculino" ? "bg-color_darkblue" : "bg-color_yellow";

  return (
    <TouchableOpacity
      className="flex-row items-center bg-white rounded-2xl shadow-md p-4 overflow-hidden"
      onPress={() => setChecked(!checked)}
    >
      <View className={`absolute left-0 top-0 bottom-0 w-2 ${sexColor}`} />
      <View className="w-16 h-16 justify-center items-center border-[4px] border-[#D3E4FE] rounded-full">
        <Image source={{ uri: url }} className="w-14 h-14 rounded-full" />
      </View>
      <View className="ml-3 flex-1">
        <Text className="text-lg font-semibold text-gray-900">{name}</Text>
        <View className="bg-indigo-100 rounded-full px-3 py-1 mt-1 self-start">
          <Text className="text-indigo-700 text-xs font-medium">
            {position}
          </Text>
        </View>
      </View>
      <View
        className={`w-6 h-6 rounded-full border-2 items-center justify-center ${
          checked ? "bg-indigo-600 border-indigo-600" : "border-gray-300"
        }`}
      >
        {checked && <View className="w-2 h-2 bg-white rounded-full" />}
      </View>
    </TouchableOpacity>
  );
};
