import { ReactNode } from "react";
import { Modal, Text, View } from "react-native";
import { Button } from "./forms";

type FeedbackModalProps = {
  visible: boolean;
  title: string;
  message: string;
  buttonTitle?: string;
  onClose?: () => void;
  icon?: ReactNode;
};

export const FeedbackModal = ({
  visible,
  title,
  message,
  buttonTitle = "OK",
  onClose,
  icon,
}: FeedbackModalProps) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View className="flex-1 items-center justify-center bg-black/50">
        <View className="w-11/12 rounded-2xl bg-white p-8 gap-6">
          {icon && (
            <View className="items-center justify-center">{icon}</View>
          )}
          <View className="gap-3">
            <Text className="font-inter_bold text-xl text-color_black text-center">
              {title}
            </Text>
            <Text className="font-inter_regular text-sm text-color_gray text-center">
              {message}
            </Text>
          </View>
          <Button title={buttonTitle} onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};
