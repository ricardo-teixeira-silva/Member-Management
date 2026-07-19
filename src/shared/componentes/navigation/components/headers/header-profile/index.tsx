import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Header = () => {
  const insets = useSafeAreaInsets();
  const HEADER_TOP_OFFSET = 12;

  return (
    <View
      className="flex-row justify-between items-center px-4 py-4 bg-white"
      style={{
        paddingTop: insets.top + HEADER_TOP_OFFSET,
      }}
    >
      <View className="flex-row items-center, gap-3">
        <View className="w-12 h-12 rounded-full items-center justify-center bg-color_blue">
          <MaterialCommunityIcons
            name="church-outline"
            size={24}
            color="white"
          />
        </View>
        <View className="flex-row items-center gap-1">
          <Text className="text-sm text-color_gray">
            Missionária dos Apóstolos
          </Text>
        </View>
      </View>
    </View>
  );
};
