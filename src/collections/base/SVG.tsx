import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { TempTwoAccent, TempTwoPrimary } from "../../components/base/SVG";

const SVGCollection = () => {
  const [fill, setFill] = useState("pink");
  return (
    <ScrollView>
      <TempTwoPrimary width={216} height={200} fill={fill} />
      <TempTwoAccent width={216} height={200} fill={fill} />
    </ScrollView>
  );
};

export default SVGCollection;
