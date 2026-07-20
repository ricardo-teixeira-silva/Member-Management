import bibleAnimation from "@/shared/assets/animations/bible.json";
import { LottieAnimation } from "@/shared/componentes";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSuccess } from "./succes.model";

export default function Success() {
  useSuccess();

  return (
    <SafeAreaView>
      <LottieAnimation source={bibleAnimation} width={250} height={250} />
    </SafeAreaView>
  );
}
