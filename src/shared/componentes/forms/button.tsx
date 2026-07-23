import { ReactElement } from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type ButtonVariant =
  | "primary"
  | "yellow"
  | "outline"
  | "lightblue"
  | "indigoSoft";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  loading?: boolean;
  textLoading?: string;
  variant?: ButtonVariant;
  iconLeft?: ReactElement;
};

const containerByVariant: Record<ButtonVariant, string> = {
  primary: "bg-color_blue",
  yellow: "bg-color_ligthyellow",
  outline: "bg-transparent border-2 border-color_blue",
  lightblue: "bg-color_lightblue",
  indigoSoft: "bg-indigo-100",
};

const textByVariant: Record<ButtonVariant, string> = {
  primary: "text-white",
  yellow: "text-white",
  outline: "text-color_blue",
  lightblue: "text-white",
  indigoSoft: "text-indigo-700",
};

const spinnerColorByVariant: Record<ButtonVariant, string> = {
  primary: "#d2d2f7",
  yellow: "#ffffff",
  outline: "#00236F",
  lightblue: "#ffffff",
  indigoSoft: "#4338CA", // Indigo 700
};

export const Button = ({
  title,
  loading = false,
  textLoading = "Carregando...",
  disabled,
  variant = "primary",
  iconLeft,
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
          color={spinnerColorByVariant[variant]}
          size="small"
        />
      )}
      {!loading && iconLeft}
      <Text className={`${textByVariant[variant]} font-medium`}>
        {renderDinamicText()}
      </Text>
    </TouchableOpacity>
  );
};
