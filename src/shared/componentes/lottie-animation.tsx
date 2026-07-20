import LottieView, { AnimationObject } from "lottie-react-native";
import { View } from "react-native";

interface Props {
  source: AnimationObject | { uri: string } | string;
  width?: number;
  height?: number;
}

export function LottieAnimation({ source, width = 200, height = 200 }: Props) {
  return (
    <View>
      <LottieView
        source={source}
        autoPlay
        loop
        style={{
          width,
          height,
        }}
      />
    </View>
  );
}
