import { Button } from "@/shared/componentes";
import { Modal, Text, View } from "react-native";
import { Exclamation } from "./exclamation";

type FeedbackModalProps = {
  modalVisible: boolean;
  onCloseModal?: () => void;
};

export const FeedbackModal = ({
  modalVisible,
  onCloseModal,
}: FeedbackModalProps) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View className="flex-1 items-center justify-center bg-black/50">
        <View className="w-11/12 rounded-2xl bg-white p-8 gap-6">
          <View className="items-center justify-center">
            <Exclamation />
          </View>
          <View className="gap-3">
            <Text className="font-inter_bold text-xl text-color_black text-center">
              Falha na Autenticação
            </Text>
            <Text className="font-inter_regular text-sm text-color_gray text-center">
              Não foi possível autenticar sua conta. Verifique seu e-mail e
              senha e tente novamente.
            </Text>
          </View>
          <Button title="Tentar novamente" onPress={onCloseModal} />
        </View>
      </View>
    </Modal>
  );
};
