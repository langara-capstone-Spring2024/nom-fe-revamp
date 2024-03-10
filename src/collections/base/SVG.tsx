import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  TempTwoAccent,
  TempTwoPrimary,
  TempThreePrimary,
  TempThreeAccent,
} from "../../components/base/SVG";
import { View, useWindowDimensions } from "react-native";

const SVGCollection = () => {
  const [fill, setFill] = useState("#FFBF41");
  return (
    <ScrollView>
      <View style={{ width: 108, height: 100 }}>
        <TempTwoPrimary fill={fill} />
      </View>
      <View style={{width: 360, height: 164}}>
        <TempTwoAccent  fill={fill} />
      </View>
      <TempThreePrimary width={400} height={200} fill={fill} />
      <TempThreeAccent width={400} height={200} fill={fill} />
    </ScrollView>
  );
};

export default SVGCollection;
