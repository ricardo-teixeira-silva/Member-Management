import { Container, Input } from "@/shared/componentes";
import {
  Button,
  GenderSelector,
  SectionDivider,
  Select,
} from "@/shared/componentes/forms";
import { ListSelectTypes } from "@/shared/componentes/forms/select";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";

export default function Register() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  const mockData: Array<ListSelectTypes> = [
    {
      icon: (
        <MaterialCommunityIcons name="window-close" size={24} color="black" />
      ),
      name: "Diacono",
      value: "Diacono",
    },
    {
      icon: (
        <MaterialCommunityIcons name="window-close" size={24} color="black" />
      ),
      name: "Pastor",
      value: "Pastor",
    },
  ];

  return (
    <Container>
      <View className=" gap-1 w-[80%]">
        <Text className="text-calor_darkblue text-2xl font-semibold">
          Cadastro de Membros
        </Text>
        <Text className="text-color_silver text-sm">
          Registre novos integrantes na comunidade com clareza e organização.
        </Text>
      </View>
      <View className="gap-4">
        <Input
          name="name"
          label="Nome completo"
          control={control}
          placeholder="Ex: Claudio Silva de oliveira"
        />
        <Input
          name="position"
          label="Cargo"
          control={control}
          placeholder="Ex: Diácono"
        />
        <Select
          control={control}
          name="position"
          label="Sexo"
          data={mockData}
        />
        <GenderSelector control={control} name="sexo" label="Sexo" />
        <SectionDivider />
        <Button title="Salvar Cadastro" />
      </View>
    </Container>
  );
}
