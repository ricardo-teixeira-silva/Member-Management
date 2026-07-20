import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface WeeklyNoteItemProps {
  day: string;
  weekDay: string;
  title: string;
  subtitle: string;
  highlight?: boolean;
}

export const WeeklyNoteItem = ({
  day,
  weekDay,
  title,
  subtitle,
  highlight = false,
}: WeeklyNoteItemProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`flex-row items-center rounded-2xl p-3 ${
        highlight ? "border border-amber-400 bg-white/10" : "bg-transparent"
      }`}
    >
      <View
        className={`mr-4 h-16 w-14 items-center justify-center rounded-xl ${
          highlight ? "bg-amber-400" : "bg-white/10"
        }`}
      >
        <Text
          className={`font-inter_bold text-lg ${
            highlight ? "text-[#23408E]" : "text-white"
          }`}
        >
          {day}
        </Text>
        <Text
          className={`text-[10px] font-inter_bold uppercase ${
            highlight ? "text-[#23408E]" : "text-blue-200"
          }`}
        >
          {weekDay}
        </Text>
      </View>
      <View className="flex-1">
        <Text className="font-normal text-base text-white">{title}</Text>
        <View className="mt-1 flex-row items-center">
          <Feather name="map-pin" size={13} color="#A5B4FC" />
          <Text className="ml-2 font-inter_regular text-sm text-blue-200">
            {subtitle}
          </Text>
        </View>
      </View>

      {highlight ? (
        <Feather name="star" size={22} color="#FBBF24" />
      ) : (
        <Feather name="chevron-right" size={22} color="#6E82C6" />
      )}
    </TouchableOpacity>
  );
};
