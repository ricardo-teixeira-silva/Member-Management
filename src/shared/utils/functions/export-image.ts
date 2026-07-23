import * as Sharing from "expo-sharing";
import { RefObject } from "react";
import ViewShot from "react-native-view-shot";

/**
 * @docs
 *
 * Como usar:
 *
 * 1. Importe a função:
 *
 * import { exportImage } from "../../utils/exportImage";
 *
 *
 * 2. Crie uma referência para o ViewShot:
 *
 * const viewRef = useRef<ViewShot>(null);
 *
 *
 * 3. Passe a referência para o ViewShot:
 *
 * <ViewShot ref={viewRef}>
 *   Conteúdo que será capturado
 * </ViewShot>
 *
 *
 * 4. Chame a função para compartilhar:
 *
 * <Button
 *   title="Compartilhar imagem"
 *   onPress={() => exportImage(viewRef)}
 * />
 * 
 * 
 * exemplo:
 * 
 * import ViewShot from "react-native-view-shot";
 * import { exportImage } from "@/shared/utils/functions/export-image";
 * 
 * export default function Screen(){
 *  
 *   const viewRef = useRef<ViewShot>(null);
 *    
 *  return(
*      <Button
        title="Exportar tela inteira (PNG)"
        onPress={() => exportImage(viewRef)}
      />
 *    <ViewShot
        ref={viewRef}
        options={{ format: "png", quality: 1, result: "tmpfile" }}
        style={{ backgroundColor: "#fff" }}
      >.....
      </ViewShot>
 * )
 * 
 * }
 *
 */

export async function exportImage(viewRef: RefObject<ViewShot | null>) {
  try {
    if (!viewRef.current?.capture) {
      throw new Error("ViewShot não está disponível.");
    }
    const uri = await viewRef.current.capture();
    await Sharing.shareAsync(uri);
  } catch (error) {
    console.error("Erro ao exportar:", error);
  }
}
