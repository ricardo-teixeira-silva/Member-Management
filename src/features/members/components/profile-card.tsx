import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

type ProfileCardProps = {
  name: string;
  position: string;
  url: string;
  sex: string;
  checked?: boolean | undefined;
  onPress?: () => void;
};

export const ProfileCard = ({
  name,
  position,
  url,
  sex,
  checked,
  onPress,
}: ProfileCardProps) => {
  const sexColor =
    sex === "Masculino" ? "bg-color_darkblue" : "bg-color_yellow";

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="
        flex-row
        items-center
        bg-white
        rounded-2xl
        shadow-md
        p-4
        overflow-hidden
      "
    >
      <View
        className={`
          absolute
          left-0
          top-0
          bottom-0
          w-2
          ${sexColor}
        `}
      />
      <Image source={{ uri: url }} className="w-14 h-14 rounded-full" />
      <View className="flex-1 ml-4">
        <Text className="font-medium text-gray-800 text-base">{name}</Text>
        <View className="mt-1 self-start rounded-full bg-indigo-100 px-3 py-1">
          <Text className="text-xs font-medium text-indigo-700">
            {position}
          </Text>
        </View>
      </View>
      {checked !== undefined && (
        <View
          className={`
          w-6
          h-6
          rounded-md
          border-2
          items-center
          justify-center
          ${
            checked
              ? "bg-indigo-600 border-indigo-600"
              : "bg-white border-gray-300"
          }
        `}
        >
          {checked && (
            <MaterialCommunityIcons name="check" size={16} color="#FFFFFF" />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};
