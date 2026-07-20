import * as Sharing from "expo-sharing";
import { RefObject } from "react";
import ViewShot from "react-native-view-shot";

export function useExportImage() {
  const exportImage = async (viewRef: RefObject<ViewShot | null>) => {
    try {
      const capture = viewRef.current?.capture;

      if (!capture) {
        throw new Error("ViewShot não está disponível.");
      }

      const uri = await capture();

      await Sharing.shareAsync(uri);
    } catch (error) {
      console.error("Erro ao exportar imagem:", error);
    }
  };

  return {
    exportImage,
  };
}
