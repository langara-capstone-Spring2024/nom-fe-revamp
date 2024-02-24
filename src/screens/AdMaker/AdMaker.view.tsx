import { View, Text } from "react-native";
import createStyles from "./AdMaker.style";
import { AdMakerGeneratedProps } from "./AdMaker.props";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import { theme as t } from "../../utils/Theme";
import * as Progress from "react-native-progress";
import CircularNumber from "../../components/base/CircularNumber";
import Typography from "../../components/base/Typography";
import AdImagePicker from "../../components/base/AdImagePicker";
import Button from "../../components/base/Button";

const AdMaker = (props: AdMakerGeneratedProps) => {
  const { localImage, handleImageChange } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme as any), [theme]);

  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={0.25}
        color={t.Border.contrast}
        unfilledColor={"#D4D4D4"}
        borderWidth={0}
        height={2}
        width={null}
        style={styles.progressBar}
      />
      <View style={styles.wrapper}>
        <View style={styles.contentContainer}>
          <CircularNumber number={1} />
          <View style={styles.textContainer}>
            <Typography variant="title5" alignment="left" color="primary">
              Upload Ad Image
            </Typography>
            <Typography variant="bodySm" alignment="left" color="primary">
              Recommended image ratio is 2:1
            </Typography>
          </View>
        </View>
      </View>
      <View style={styles.imagePicker}>
        <AdImagePicker image={localImage} setImage={handleImageChange} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          variant="primary"
          buttonSize="lg"
          text="Next"
          takeFullWidth
          isDisabled={!localImage}
        />
      </View>
    </View>
  );
};

export default AdMaker;
