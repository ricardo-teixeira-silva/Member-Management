import { usePhotoPicker } from "@/shared/hooks/usePhotoPicker";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { createMember } from "../../services/members.services";
import { RegisterFormData } from "../../types/members";

export const useRegisterModel = () => {
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { isValid },
  } = useForm<RegisterFormData>({
    mode: "onChange",
    defaultValues: {
      photo: "",
      name: "",
      church: "",
      position: "",
      sexo: "",
      birthDate: null,
      baptismDate: null,
      ordinationDate: null,
    },
  });

  const { pickImage } = usePhotoPicker();

  const photo = watch("photo");

  const pickPhoto = async () => {
    const uri = await pickImage();

    if (!uri) return;

    setValue("photo", uri, {
      shouldValidate: true,
    });
  };

  const mutation = useMutation({
    mutationFn: createMember,
    onSuccess: () => {
      console.log("Salvo com sucesso!!!");
    },
    onError: (err) => {
      console.error("Erro ao criar membro:", err);
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    mutation.mutate(data);
  };

  const goBack = () => {
    router.back();
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    isValid,
    photo,
    pickPhoto,
    goBack,
  };
};
