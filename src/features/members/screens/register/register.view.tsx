import { Container, Input } from "@/shared/componentes";
import {
  Button,
  GenderSelector,
  SectionDivider,
  Select,
} from "@/shared/componentes/forms";
import { PhotoPicker } from "@/shared/componentes/photo-picker";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Text, View } from "react-native";
import { churchRoles } from "../../utils/church-roles";
import { memberRoles } from "../../utils/member-roles";
import { useRegisterModel } from "./register.model";

export default function Register() {
  const { control, photo, pickPhoto, goBack, isValid, handleSubmit, onSubmit } =
    useRegisterModel();

  return (
    <Container>
      <View className=" gap-1 w-[80%]">
        <Text className="text-color_darkblue text-2xl font-semibold">
          Cadastro de Membros
        </Text>
        <Text className="text-color_silver text-sm">
          Registre novos integrantes na comunidade com clareza e organização.
        </Text>
      </View>
      <View className="gap-4">
        <PhotoPicker image={photo} onPress={pickPhoto} />
        <Input
          name="name"
          label="Nome completo"
          control={control}
          placeholder="Ex: Claudio Silva de oliveira"
          iconLeft={<FontAwesome6 name="user-tie" size={24} color="#374151" />}
        />
        <Select
          control={control}
          name="church"
          label="Ministério"
          data={churchRoles}
          iconLeft={<MaterialIcons name="church" size={24} color="#374151" />}
        />
        <Select
          control={control}
          name="position"
          label="Cargo"
          data={memberRoles}
          iconLeft={<FontAwesome5 name="hands" size={20} color="#374151" />}
        />
        <GenderSelector control={control} name="sexo" label="Sexo" />
        <SectionDivider />
        <Button title="Salvar Cadastro" onPress={handleSubmit(onSubmit)} />
        <Button title="Cancelar" variant="indigoSoft" onPress={goBack} />
      </View>
    </Container>
  );
}
