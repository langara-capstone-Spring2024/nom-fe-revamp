import { View, Text } from "react-native";
import { LoadingAnimationProps } from "./LoadingAnimation.props";
import createStyles from "./LoadingAnimation.style";
import React, { useMemo, useRef, useEffect } from "react";
import { useTheme } from "react-native-paper";
import LottieView from "lottie-react-native";
import loadingAnimationData from "./../../../../assets/loadingAnimation.json";

const LoadingAnimation = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        source={loadingAnimationData}
        style={styles.animation}
        autoPlay
        loop
      />
    </View>
  );
};

export default LoadingAnimation;
