import { Input } from "@/shared/componentes";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { mapDayLabelToName } from "../utils/dayNameMapper";

type DayBoxProps = {
  dayLabel: string;
  cultoPlaceholder: string;
  grupoPlaceholder: string;
  control: any;
  onHighlightChange?: (day: string, value: boolean) => void;
};

export const DayBox = ({
  dayLabel,
  cultoPlaceholder,
  grupoPlaceholder,
  control,
  onHighlightChange,
}: DayBoxProps) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const toggleHighlight = () => {
    const newValue = !isHighlighted;
    setIsHighlighted(newValue);
    const key = mapDayLabelToName(dayLabel);
    onHighlightChange?.(key, newValue);
  };

  return (
    <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
      <View className="flex-row items-center justify-between mb-2">
        <View className="flex-row items-center">
          <Ionicons name="calendar-outline" size={20} color="#1E40AF" />
          <Text className="text-blue-900 font-bold text-sm ml-2">
            {dayLabel}
          </Text>
        </View>

        <TouchableOpacity onPress={toggleHighlight}>
          <Ionicons
            name={isHighlighted ? "star" : "star-outline"}
            size={22}
            color={isHighlighted ? "#FFD700" : "#737687"}
          />
        </TouchableOpacity>
      </View>

      <Input
        name={`${mapDayLabelToName(dayLabel)}_culto`}
        label="Culto (nome)"
        placeholder={cultoPlaceholder}
        control={control}
      />

      <View className="mt-3">
        <Input
          name={`${mapDayLabelToName(dayLabel)}_grupo`}
          label="Grupo (nome)"
          placeholder={grupoPlaceholder}
          control={control}
        />
      </View>
    </View>
  );
};
