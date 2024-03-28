import { View, Image } from "react-native";
import { AdProps } from "./Ad.props";
import createStyles from "./Ad.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";

const Ad = (props: AdProps) => {
  const {
    template,
    primary = "#FFBF41",
    accent = "#3C3C3C",
    imageUrl,
    headline,
    tagline,
  } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      {template === "1" ? (
        <>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Image
            source={require("../../../../assets/template/1_S.png")}
            tintColor={accent}
            style={styles.image}
          />
          <Image
            source={require("../../../../assets/template/1_P.png")}
            tintColor={primary}
            style={styles.image}
          />
          <View
            style={[
              styles.typography,
              {
                top: "20%",
                right: "58%",
                left: "13%",
              },
            ]}
          >
            <Typography variant="title5">{headline}</Typography>
          </View>
          <View
            style={[
              styles.typography,
              {
                right: "58%",
                left: "13%",
                bottom: "20%",
              },
            ]}
          >
            <Typography variant="bodyXs">{tagline}</Typography>
          </View>
        </>
      ) : template === "2" ? (
        <>
          <Image
            source={{ uri: "https://picsum.photos/360?random=1" }}
            style={styles.image}
          />
          <Image
            source={require("../../../../assets/template/2_P.png")}
            tintColor={primary}
            style={styles.image}
          />
          <Image
            source={require("../../../../assets/template/2_S.png")}
            tintColor={accent}
            style={styles.image}
          />
          <View
            style={[
              styles.typography,
              {
                top: "23%",
                right: "8%",
                left: "58%",
              },
            ]}
          >
            <Typography variant="title5" alignment="right">
              {headline}
            </Typography>
          </View>
          <View
            style={[
              styles.typography,
              {
                right: "8%",
                left: "58%",
                bottom: "23%",
              },
            ]}
          >
            <Typography variant="bodyXs" alignment="right">
              {tagline}
            </Typography>
          </View>
        </>
      ) : (
        <>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Image
            source={require("../../../../assets/template/1_S.png")}
            tintColor={accent}
            style={styles.image}
          />
          <Image
            source={require("../../../../assets/template/1_P.png")}
            tintColor={primary}
            style={styles.image}
          />
          <View
            style={[
              styles.typography,
              {
                top: "20%",
                right: "58%",
                left: "13%",
              },
            ]}
          >
            <Typography variant="title5">{headline}</Typography>
          </View>
          <View
            style={[
              styles.typography,
              {
                right: "58%",
                left: "13%",
                bottom: "20%",
              },
            ]}
          >
            <Typography variant="bodyXs">{tagline}</Typography>
          </View>
        </>
      )}
    </View>
  );
};

export default Ad;
