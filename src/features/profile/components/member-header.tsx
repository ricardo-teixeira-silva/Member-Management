import { FontAwesome6 } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

type MemberHeaderProps = {
  name: string;
  church: string;
  photo: string;
};

export const MemberHeader = ({ name, photo, church }: MemberHeaderProps) => {
  return (
    <View className="items-center mt-8">
      <View className="relative">
        <Image
          source={{ uri: photo }}
          className="w-32 h-32 rounded-full border-4 border-blue-800"
        />
        <View className="absolute bottom-0 right-0 bg-amber-400 w-9 h-9 rounded-full items-center justify-center border-2 border-white">
          <FontAwesome6 name="church" size={16} color="#1E3A8A" />
        </View>
      </View>
      <Text className="text-2xl text-blue-900 font-semibold mt-5">{name}</Text>
      <View className="mt-2 bg-slate-200 rounded-full px-5 py-2">
        <Text className="uppercase tracking-[3px] text-blue-900 font-bold text-xs">
          {church}
        </Text>
      </View>
    </View>
  );
};
