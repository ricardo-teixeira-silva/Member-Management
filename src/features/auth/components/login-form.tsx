import { Button, Input } from "@/shared/componentes";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import { useForm } from "react-hook-form";
import { Keyboard, View } from "react-native";
import { useSignIn } from "../screens/login/login.model";
import { LoginFormData } from "../types/auth.types";
import { FeedbackModal } from "./feedback-modal";

export const LoginForm = () => {
  const { login, loading } = useSignIn();

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<LoginFormData>({
    mode: "onChange",
  });

  const onSubmit = (data: LoginFormData) => {
    Keyboard.dismiss();
    login(data);
  };

  return (
    <View className="flex-1 gap-6">
      <Input
        name="email"
        control={control}
        placeholder="E-mail ou usuário"
        placeholderTextColor="#737687"
        iconLeft={<FontAwesome name="envelope-o" size={24} color="#737687" />}
      />
      <Input
        name="password"
        control={control}
        secureTextEntry
        placeholder="Sua senha"
        placeholderTextColor="#737687"
        iconLeft={<Octicons name="shield-lock" size={24} color="#737687" />}
      />
      <Button
        title="Entrar"
        textLoading="Autenticando..."
        loading={loading}
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      />
      <FeedbackModal modalVisible={false} onCloseModal={() => {}} />
    </View>
  );
};
