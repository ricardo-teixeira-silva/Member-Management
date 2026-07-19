import Ionicons from "@expo/vector-icons/Ionicons";
import { ReactElement, useState } from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import {
  FlatList,
  ListRenderItemInfo,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export type ListSelectTypes = {
  icon?: ReactElement;
  name: string;
  value: string | number;
};

type SelectProps = {
  label?: string;
  iconLeft?: ReactElement;
  placeholder?: string;
  data: ListSelectTypes[];
};

export const Select = <T extends FieldValues>({
  label,
  iconLeft,
  placeholder,
  data,
  name,
  control,
}: UseControllerProps<T> & SelectProps) => {
  const [listValues, setListValues] = useState(data);
  const [openModal, setOpenModal] = useState(false);

  const renderItem = (
    { item }: ListRenderItemInfo<ListSelectTypes>,
    onChange: (value: { name: string; value: string | number }) => void,
  ) => (
    <TouchableOpacity
      className="flex-row items-center justify-between h-12"
      onPress={() => {
        onChange({ name: item.name, value: item.value });
        setOpenModal(false);
        setListValues(data);
      }}
    >
      <View className="flex-row items-center gap-4">
        {item.icon}
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleSearchValue = (search: string) => {
    if (!search) return setListValues(data);

    const listFiltered = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );

    setListValues(listFiltered);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <View>
          {label && (
            <Text className="text-gray-700 text-sm font-semibold pl-1">
              {label}
            </Text>
          )}
          <View className="bg-[#EDEEEF] rounded-xl h-14 px-4 flex-row items-center gap-3">
            {iconLeft}
            <TextInput
              className="text-color_gray flex-1 w-full"
              placeholderTextColor="#8C9AAD"
              placeholder={placeholder}
              editable={false}
              value={field.value?.name ?? ""}
            />
            <TouchableOpacity
              className="w-10 h-10 items-center justify-center"
              onPress={() => setOpenModal(true)}
            >
              <Ionicons name="chevron-down" size={24} color="#737687" />
            </TouchableOpacity>
          </View>
          {fieldState.error?.message && (
            <Text className="text-red-400 text-[10px] px-2">
              {fieldState.error.message}
            </Text>
          )}
          <Modal transparent animationType="slide" visible={openModal}>
            <View className="flex-1 justify-center items-center">
              <View className="w-[90%] h-[70%] bg-white rounded-xl">
                <View className="p-4 flex-row items-center justify-between border-b border-[#F0F0F0]">
                  <Text className="text-sm font-semibold">
                    Selecione um dado:
                  </Text>
                  <TouchableOpacity
                    onPress={() => setOpenModal(false)}
                    className="p-2"
                  >
                    <Ionicons name="close" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <View className="px-4 py-1 flex-row items-center gap-4">
                  <Ionicons name="search-outline" size={20} color="#737687" />
                  <TextInput
                    placeholder="Procurar"
                    className="flex-1"
                    onChangeText={handleSearchValue}
                  />
                </View>
                <FlatList
                  data={listValues}
                  renderItem={(info) => renderItem(info, field.onChange)}
                  contentContainerStyle={{
                    gap: 4,
                    paddingHorizontal: 22,
                    paddingVertical: 16,
                  }}
                />
              </View>
            </View>
          </Modal>
        </View>
      )}
    />
  );
};
