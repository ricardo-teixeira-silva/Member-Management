import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type MemberInfoGridProps = {
  sex: string;
  birthDate: string;
  baptismDate: string;
  ordinationDate: string;
};

export const MemberInfoGrid = ({
  baptismDate,
  birthDate,
  ordinationDate,
  sex,
}: MemberInfoGridProps) => {
  return (
    <View className="gap-6">
      <View className="flex-row">
        <View className="flex-1">
          <Text className="uppercase tracking-[3px] text-[11px] text-amber-700">
            Sexo
          </Text>
          <Text className="font-bold text-slate-900 text-lg">{sex}</Text>
        </View>
        <View className="flex-1">
          <Text className="uppercase tracking-[3px] text-[11px] text-amber-700">
            Nascimento
          </Text>
          <Text className="font-bold text-slate-900 text-lg">{birthDate}</Text>
        </View>
      </View>
      <View className="border-b border-slate-200" />
      <View>
        <View className="flex-row justify-between">
          <View>
            <Text className="uppercase tracking-[3px] text-[11px] text-amber-700">
              Data do Batismo
            </Text>
            <Text className="font-bold text-slate-900 text-lg">
              {baptismDate}
            </Text>
          </View>
          <MaterialCommunityIcons name="waves" size={24} color="#94A3B8" />
        </View>
      </View>
      <View className="border-b border-slate-200" />
      <View>
        <View className="flex-row justify-between">
          <View>
            <Text className="uppercase tracking-[3px] text-[11px] text-amber-700">
              Data de Consagração
            </Text>
            <Text className="font-bold text-slate-900 text-lg">
              {ordinationDate}
            </Text>
          </View>
          <MaterialCommunityIcons
            name="star-outline"
            size={24}
            color="#94A3B8"
          />
        </View>
      </View>
    </View>
  );
};
