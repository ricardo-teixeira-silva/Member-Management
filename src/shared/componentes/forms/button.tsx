import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  loading?: boolean;
  textLoading?: string;
};

export const Button = ({
  title,
  loading = false,
  textLoading = "Carregando...",
  disabled,
  ...rest
}: ButtonProps) => {
  const isDisabled = loading || disabled;

  const renderDinamicText = (): string => {
    if (loading) return textLoading;
    return title;
  };

  return (
    <TouchableOpacity
      className={`bg-color_blue h-14 flex-row gap-2 items-center justify-center rounded-xl ${
        isDisabled ? "opacity-50" : "opacity-100"
      }`}
      activeOpacity={0.8}
      disabled={isDisabled}
      {...rest}
    >
      {loading && <ActivityIndicator size="large" color="#d2d2f7" />}

      <Text className="text-white font-inter_bold">{renderDinamicText()}</Text>
    </TouchableOpacity>
  );
};
