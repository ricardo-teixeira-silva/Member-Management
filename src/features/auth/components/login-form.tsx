import { Button, Input } from "@/shared/componentes";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Keyboard, View } from "react-native";
import { LoginRequestTypes, loginRequestSchema } from "../schemas/login.schema";
import { useSignIn } from "../screens/login/login.model";
import { FeedbackModal } from "./feedback-modal";

export const LoginForm = () => {
  const { login, loading, isError, reset } = useSignIn();

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<LoginRequestTypes>({
    mode: "onChange",
    resolver: zodResolver(loginRequestSchema),
  });

  const onSubmit = ({ email, password }: LoginRequestTypes) => {
    Keyboard.dismiss();
    login({
      email: email.trim(),
      password: password.trim(),
    });
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
      <FeedbackModal modalVisible={isError} onCloseModal={reset} />
    </View>
  );
};
