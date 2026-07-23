import { Feather } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import logo from "../assets/images/logo.png";
import type { MembershipData } from "../screens/membership.model";

type Props = {
  data: MembershipData;
  width: number;
  height: number;
};

export const MembershipCardFront = ({ data, width, height }: Props) => {
  return (
    <View
      className="rounded-3xl bg-white overflow-hidden shadow-2xl"
      style={{ width, height }}
    >
      <View
        className="absolute bg-color_blue"
        style={{
          top: -80,
          right: -60,
          width: 260,
          height: 260,
          borderRadius: 999,
        }}
      />
      <View
        className="absolute bg-color_yellow"
        style={{
          bottom: -40,
          left: -30,
          width: 140,
          height: 140,
          borderRadius: 999,
          opacity: 0.9,
        }}
      />
      <View
        className="absolute bg-color_blue"
        style={{
          bottom: -70,
          left: -60,
          width: 200,
          height: 200,
          borderRadius: 999,
        }}
      />
      <View
        className="absolute flex-row flex-wrap"
        style={{ bottom: 30, left: 20, width: 80, gap: 6 }}
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <View
            key={i}
            className="bg-color_yellow rounded-full"
            style={{ width: 5, height: 5 }}
          />
        ))}
      </View>
      <View
        className="absolute items-center justify-center"
        style={{
          width: height,
          height: width,
          top: (height - width) / 2,
          left: -(height - width) / 2,
          transform: [{ rotate: "90deg" }],
        }}
      >
        <View className="flex-1 w-full px-6 py-6 justify-between">
          <View className="flex-row items-start justify-between">
            <View className="w-24 h-24 border-2 border-dashed border-slate-300 rounded-2xl items-center justify-center bg-white/70">
              <Image source={logo} className="w-24 h-24" />
            </View>
            <View className="w-28 h-32 rounded-2xl overflow-hidden border-[3px] border-color_yellow bg-slate-200">
              {data.photoUrl ? (
                <Image
                  source={{ uri: data.photoUrl }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              ) : (
                <View className="flex-1 items-center justify-center">
                  <Feather name="user" size={48} color="#94A3B8" />
                </View>
              )}
            </View>
          </View>
          <View className="mt-4">
            <Text
              className="font-inter_bold text-color_lightblue text-2xl leading-7"
              numberOfLines={2}
            >
              {data.fullName.toUpperCase()}
            </Text>
            <Text className="font-inter_semibold text-color_yellow text-sm mt-1 tracking-wider">
              {data.role.toUpperCase()}
            </Text>
          </View>
          <View className="mt-2">
            <Text
              className="font-inter_bold text-color_blue text-lg leading-6"
              numberOfLines={3}
            >
              {data.church}
            </Text>
          </View>
          <View className="mt-2 pt-2 border-t border-slate-200">
            <Text className="font-inter_regular text-slate-600 text-xs leading-5">
              {data.address}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
