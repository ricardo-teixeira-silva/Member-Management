import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MembershipCard } from "../../components/membership-card";
import { useMembershipModel } from "./membership.model";

export default function Membership() {
  const { data, isFlipped, toggleFlip, goBack } = useMembershipModel();

  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
  const CARD_WIDTH = Math.min(screenWidth * 0.82, 340);
  const CARD_HEIGHT = Math.min(screenHeight * 0.7, CARD_WIDTH * 1.75);

  return (
    <SafeAreaView
      className="flex-1 bg-color_container"
      edges={["top", "bottom"]}
    >
      <StatusBar style="dark" />
      <View className="flex-row items-center justify-between px-5 py-4">
        <TouchableOpacity
          onPress={goBack}
          className="w-10 h-10 rounded-full items-center justify-center"
        >
          <Feather name="chevron-left" size={26} color="#0B1C30" />
        </TouchableOpacity>

        <View className="items-center">
          <Text className="font-inter_bold text-color_darkblue text-lg">
            Minha Carteirinha
          </Text>
          <Text className="font-inter_regular text-slate-500 text-xs">
            Toque no botão para virar
          </Text>
        </View>

        <View className="w-10" />
      </View>
      <Pressable
        onPress={toggleFlip}
        className="flex-1 items-center justify-center px-4"
      >
        <MembershipCard
          data={data}
          isFlipped={isFlipped}
          width={CARD_WIDTH}
          height={CARD_HEIGHT}
        />
        <View className="flex-row gap-2 mt-6">
          <View
            className={`h-2 rounded-full ${
              !isFlipped ? "w-6 bg-color_blue" : "w-2 bg-slate-300"
            }`}
          />
          <View
            className={`h-2 rounded-full ${
              isFlipped ? "w-6 bg-color_blue" : "w-2 bg-slate-300"
            }`}
          />
        </View>
      </Pressable>
      <View className="absolute bottom-10 right-6">
        <TouchableOpacity
          onPress={toggleFlip}
          activeOpacity={0.85}
          className="w-20 h-20 rounded-full bg-color_blue items-center justify-center shadow-lg"
          style={{
            shadowColor: "#00236F",
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.35,
            shadowRadius: 12,
            elevation: 10,
          }}
        >
          <Feather name="refresh-cw" size={20} color="#FEA619" />
          <Text className="font-inter_bold text-white text-[6px] mt-1">
            VIRAR
          </Text>
          <Text className="font-inter_regular text-white text-[6px]">
            CARTEIRINHA
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
