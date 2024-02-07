import React, { useRef, useEffect } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import loadingAnimationData from "./../../../../assets/loading-animation.json";
import styles from "./LoadingAnimation.style";

const LoadingAnimation = () => {
  const animationRef = useRef(null);

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
