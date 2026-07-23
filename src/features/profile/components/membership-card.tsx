import { useEffect } from "react";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import type { MembershipData } from "../screens/membership/membership.model";
import { MembershipCardBack } from "./membership-card-back";
import { MembershipCardFront } from "./membership-card-front";

type Props = {
  data: MembershipData;
  isFlipped: boolean;
  width: number;
  height: number;
};

export const MembershipCard = ({ data, isFlipped, width, height }: Props) => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withTiming(isFlipped ? 180 : 0, {
      duration: 700,
      easing: Easing.inOut(Easing.ease),
    });
  }, [isFlipped, rotation]);

  const frontStyle = useAnimatedStyle(() => {
    const rotateY = `${rotation.value}deg`;
    const opacity = interpolate(rotation.value, [0, 89, 90, 180], [1, 1, 0, 0]);
    return {
      transform: [{ perspective: 1200 }, { rotateY }],
      opacity,
    };
  });

  const backStyle = useAnimatedStyle(() => {
    const rotateY = `${rotation.value + 180}deg`;
    const opacity = interpolate(rotation.value, [0, 89, 90, 180], [0, 0, 1, 1]);
    return {
      transform: [{ perspective: 1200 }, { rotateY }],
      opacity,
    };
  });

  return (
    <Animated.View style={{ width, height }}>
      <Animated.View
        style={[
          {
            position: "absolute",
            width,
            height,
            backfaceVisibility: "hidden",
          },
          frontStyle,
        ]}
      >
        <MembershipCardFront data={data} width={width} height={height} />
      </Animated.View>

      <Animated.View
        style={[
          {
            position: "absolute",
            width,
            height,
            backfaceVisibility: "hidden",
          },
          backStyle,
        ]}
      >
        <MembershipCardBack data={data} width={width} height={height} />
      </Animated.View>
    </Animated.View>
  );
};
