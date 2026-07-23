import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { Platform, Text, TouchableOpacity, View } from "react-native";

type SelectDateProps = {
  label?: string;
  placeholder?: string;
};

const formatDate = (date?: Date) => {
  if (!date) return "";

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
};

export const SelectDate = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder = "Selecione uma data",
}: UseControllerProps<T> & SelectDateProps) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <View>
          {label && (
            <Text className="text-gray-700 text-sm font-semibold pl-1">
              {label}
            </Text>
          )}

          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-[#EDEEEF] rounded-xl h-14 px-4 flex-row items-center gap-3"
            onPress={() => setShowPicker(true)}
          >
            <Ionicons name="calendar-sharp" size={20} color="#374151" />
            <Text
              className={`flex-1 ${
                field.value ? "text-color_gray" : "text-gray-400"
              }`}
            >
              {field.value ? formatDate(field.value) : placeholder}
            </Text>
          </TouchableOpacity>

          {showPicker && (
            <DateTimePicker
              value={field.value ?? new Date()}
              mode="date"
              display={Platform.OS === "ios" ? "inline" : "calendar"}
              onValueChange={(_, selectedDate) => {
                setShowPicker(false);

                if (selectedDate) {
                  field.onChange(selectedDate);
                }
              }}
            />
          )}

          {fieldState.error?.message && (
            <Text className="text-red-400 text-[10px] px-2">
              {fieldState.error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
};
