import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import type { MembershipData } from "../screens/membership/membership.model";

type Props = {
  data: MembershipData;
  width: number;
  height: number;
};

type InfoRowProps = {
  icon: keyof typeof Feather.glyphMap;
  label: string;
  value: string;
};

const InfoRow = ({ icon, label, value }: InfoRowProps) => (
  <View className="flex-row items-center gap-3 py-2">
    <View className="w-10 h-10 rounded-xl bg-color_blue/10 items-center justify-center">
      <Feather name={icon} size={18} color="#00236F" />
    </View>
    <View className="flex-1">
      <Text className="font-inter_regular text-[10px] text-slate-500 tracking-wider uppercase">
        {label}
      </Text>
      <Text className="font-inter_semibold text-color_blue text-sm">
        {value}
      </Text>
    </View>
  </View>
);

export const MembershipCardBack = ({ data, width, height }: Props) => {
  return (
    <View
      className="rounded-3xl bg-white overflow-hidden shadow-2xl"
      style={{ width, height }}
    >
      <View
        className="absolute bg-[#00236f54]"
        style={{
          top: -70,
          left: -60,
          width: 220,
          height: 220,
          borderRadius: 999,
        }}
      />
      <View
        className="absolute bg-color_yellow"
        style={{
          bottom: -30,
          right: -30,
          width: 120,
          height: 120,
          borderRadius: 999,
          opacity: 0.9,
        }}
      />
      <View
        className="absolute bg-[#00236f54]"
        style={{
          bottom: -80,
          right: -70,
          width: 220,
          height: 220,
          borderRadius: 999,
        }}
      />
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
          <View>
            <Text className="font-inter_bold text-color_blue text-xl">
              Dados Ministeriais
            </Text>
            <View className="h-[3px] w-16 bg-color_yellow mt-1 rounded-full" />
          </View>
          <View className="mt-2">
            <InfoRow
              icon="gift"
              label="Data de Aniversário"
              value={data.birthDate}
            />
            <View className="h-[1px] bg-slate-100" />
            <InfoRow
              icon="droplet"
              label="Data de Batismo"
              value={data.baptismDate}
            />
            <View className="h-[1px] bg-slate-100" />
            <InfoRow icon="award" label="Cargo" value={data.role} />
            <View className="h-[1px] bg-slate-100" />
            <InfoRow
              icon="calendar"
              label="Data de Ordenação"
              value={data.ordinationDate}
            />
            <View className="h-[1px] bg-slate-100" />
            <InfoRow
              icon="map-pin"
              label="Congregação"
              value={data.congregation}
            />
          </View>
          <View className="pt-2 border-t border-slate-200">
            <Text className="font-inter_regular text-[10px] text-slate-500 text-center">
              Este documento comprova o vínculo ministerial do portador.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
