import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  TempTwoAccent,
  TempTwoPrimary,
  TempThreePrimary,
  TempThreeAccent,
} from "../../components/base/SVG";

const SVGCollection = () => {
  const [fill, setFill] = useState("#FFBF41");
  return (
    <ScrollView>
      <TempTwoPrimary width={216} height={200} fill={fill} />
      <TempTwoAccent width={380} height={184} fill={fill} />
      <TempThreePrimary width={400} height={200} fill={fill} />
      <TempThreeAccent width={400} height={200} fill={fill} />
    </ScrollView>
  );
};

export default SVGCollection;
