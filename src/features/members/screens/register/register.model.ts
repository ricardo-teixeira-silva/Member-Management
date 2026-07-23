import { usePhotoPicker } from "@/shared/hooks/usePhotoPicker";
import { router } from "expo-router";
import { useForm } from "react-hook-form";

type RegisterFormData = {
  photo?: string;
  name: string;
  church: string;
  position: string;
  sexo: string;
};

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

  const onSubmit = (data: RegisterFormData) => {
    const payload = {
      photo: data.photo,
      name: data.name,
      church: data.church,
      position: data.position,
      gender: data.sexo,
    };

    console.log("Payload:", payload);

    /*
    futuramente:

    await memberService.create(payload);
    */
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
