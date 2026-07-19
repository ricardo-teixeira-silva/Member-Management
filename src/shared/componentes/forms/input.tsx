import { colors } from "@/styles/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ReactElement, useState } from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

export type InputProps = TextInputProps & {
  name: string;
  label?: string;
  iconLeft?: ReactElement;
  loading?: boolean;
};

export const Input = <T extends FieldValues>({
  iconLeft,
  loading,
  secureTextEntry,
  name,
  control,
  label,
  ...rest
}: UseControllerProps<T> & InputProps) => {
  const isPassword = !!secureTextEntry;
  const [isHidden, setIsHidden] = useState(true);
  const toggle = () => setIsHidden((prev) => !prev);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <View>
          <Text className="text-gray-700 text-sm font-semibold pl-1">
            {label}
          </Text>
          <View className="bg-[#EDEEEF] rounded-xl h-14 px-4 flex-row items-center gap-3">
            {iconLeft}
            <TextInput
              className="text-color_gray flex-1 w-full"
              secureTextEntry={isPassword && isHidden}
              value={field.value}
              onChangeText={field.onChange}
              {...rest}
            />
            {isPassword ? (
              <TouchableOpacity
                className="w-10 h-10 items-center justify-center"
                onPress={toggle}
              >
                {isHidden ? (
                  <Ionicons name="eye-off-outline" size={24} color="#737687" />
                ) : (
                  <Ionicons name="eye-outline" size={24} color="#737687" />
                )}
              </TouchableOpacity>
            ) : loading ? (
              <ActivityIndicator color={colors.color_blue} size={25} />
            ) : null}
          </View>
          {fieldState.error?.message ? (
            <Text className="text-red-400 text-[10px] px-2">
              {fieldState.error.message}
            </Text>
          ) : null}
        </View>
      )}
    />
  );
};
