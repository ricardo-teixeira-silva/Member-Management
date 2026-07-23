import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";

type DatePickerFieldProps = {
  label: string;
  value: Date | null;
  placeholder: string;
  onChange: (date: Date) => void;
};

const formatDate = (date: Date | null) =>
  date
    ? new Intl.DateTimeFormat("pt-BR", {
        day: "numeric",
        month: "long",
      }).format(date)
    : "";

export const DatePickerField = ({
  label,
  value,
  placeholder,
  onChange,
}: DatePickerFieldProps) => {
  const [show, setShow] = useState(false);

  return (
    <View className="flex-1 gap-1">
      <Text className="text-gray-700 text-sm font-semibold pl-1">{label}</Text>
      <TouchableOpacity
        className="bg-white rounded-lg p-3"
        onPress={() => setShow(true)}
      >
        <Text className="text-blue-900 font-bold">
          {value ? formatDate(value) : placeholder}
        </Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "inline" : "calendar"}
          onValueChange={(_, date) => {
            setShow(false);
            onChange(date);
          }}
          onDismiss={() => setShow(false)}
        />
      )}
    </View>
  );
};
