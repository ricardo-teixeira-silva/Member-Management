import { useCurrentMember } from "@/shared/store/currentMember";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Header = () => {
  const insets = useSafeAreaInsets();
  const HEADER_TOP_OFFSET = 12;

  const member = useCurrentMember((s) => s.member);

  return (
    <View
      className="flex-row justify-between items-center px-4 py-4 bg-white"
      style={{
        paddingTop: insets.top + HEADER_TOP_OFFSET,
      }}
    >
      <View className="flex-row items-center, gap-3">
        <View className="w-14 h-14 justify-center items-center border-[4px] border-[#D3E4FE] rounded-full">
          <Image
            source={{ uri: member?.photoUrl }}
            className="w-12 h-12 rounded-full"
          />
        </View>
        <View className="gap-1">
          <Text className="text-base font-medium text-color_gray">
            {member?.name}
          </Text>
          <View className="flex-row gap-2">
            <View className="bg-indigo-100 rounded-full py-[2px] px-3 self-start">
              <Text className="text-indigo-700 text-xs font-medium">
                {member?.position}
              </Text>
            </View>
            <View className="border-[2px] border-[#FEA619] w-fit px-3 h-fit rounded-3xl">
              <Text className="text-color_yellow text-xs font-medium">
                {member?.church}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
