import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type ButtonVariant = "primary" | "yellow" | "outline" | "lightblue";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  loading?: boolean;
  textLoading?: string;
  variant?: ButtonVariant;
};

const containerByVariant: Record<ButtonVariant, string> = {
  primary: "bg-color_blue",
  yellow: "bg-color_yellow",
  outline: "bg-transparent border-2 border-color_blue",
  lightblue: "bg-color_lightblue",
};

const textByVariant: Record<ButtonVariant, string> = {
  primary: "text-white",
  yellow: "text-white",
  outline: "text-color_blue",
  lightblue: "text-white",
};

const spinnerColorByVariant: Record<ButtonVariant, string> = {
  primary: "#d2d2f7",
  yellow: "#ffffff",
  outline: "#00236F",
  lightblue: "#ffffff",
};

export const Button = ({
  title,
  loading = false,
  textLoading = "Carregando...",
  disabled,
  variant = "primary",
  ...rest
}: ButtonProps) => {
  const isDisabled = loading || disabled;

  const renderDinamicText = (): string => {
    if (loading) return textLoading;
    return title;
  };

  return (
    <TouchableOpacity
      className={`${containerByVariant[variant]} h-14 flex-row gap-2 items-center justify-center rounded-xl ${
        isDisabled ? "opacity-50" : "opacity-100"
      }`}
      activeOpacity={0.8}
      disabled={isDisabled}
      {...rest}
    >
      {loading && (
        <ActivityIndicator
          size="large"
          color={spinnerColorByVariant[variant]}
        />
      )}

      <Text className={`${textByVariant[variant]} font-inter_bold`}>
        {renderDinamicText()}
      </Text>
    </TouchableOpacity>
  );
};
