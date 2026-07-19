import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";

type GenderSelectorProps<T extends FieldValues> = UseControllerProps<T> & {
  label?: string;
};

export const GenderSelector = <T extends FieldValues>({
  control,
  name,
  label,
}: GenderSelectorProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <View className="flex-col items-start space-y-2">
          <Text className="text-gray-700 text-sm font-semibold pl-1">
            👥 {label}
          </Text>
          <View className="flex-row bg-blue-50 rounded-lg overflow-hidden">
            <TouchableOpacity
              className={`flex-1 py-3 rounded-lg ${
                field.value === "Masculino" ? "bg-blue-900" : "bg-blue-50"
              }`}
              onPress={() => field.onChange("Masculino")}
            >
              <Text
                className={`text-center font-medium ${
                  field.value === "Masculino" ? "text-white" : "text-gray-700"
                }`}
              >
                Masculino
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className={`flex-1 py-3 rounded-lg ${
                field.value === "Feminino" ? "bg-blue-900" : "bg-blue-50"
              }`}
              onPress={() => field.onChange("Feminino")}
            >
              <Text
                className={`text-center font-medium ${
                  field.value === "Feminino" ? "text-white" : "text-gray-700"
                }`}
              >
                Feminino
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};
