import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { MenuListProps } from "./MenuList.props";
import createStyles from "./MenuList.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";
import { Entypo } from "@expo/vector-icons";
import { theme as t } from "../../../utils/Theme";

const MenuList = (props: MenuListProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {
    menuId,
    menuImage,
    menuName,
    menuPrice,
    selected,
    handleSelect,
    hideRadioButton,
  } = props;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        handleSelect && handleSelect(menuId);
      }}
    >
      <View style={styles.menuListContainer}>
        <View>
          {menuImage ? (
            <Image
              style={styles.menuImage}
              source={{ uri: menuImage }}
              onError={(error) => console.error("No image: ", error)}
            />
          ) : (
            <View style={styles.noMenuImage}>
              <Typography otherStyle={{ textAlign: "center" }}>
                No image
              </Typography>
            </View>
          )}
        </View>
        <View style={styles.menuRight}>
          <View style={styles.menuDetailsContainer}>
            <View>
              <Typography>{menuName}</Typography>
              <Typography color="subtle">${menuPrice}</Typography>
            </View>
          </View>

          <View>
            {!hideRadioButton && (
              <View
                style={[
                  styles.radioButton,
                  {
                    borderColor: selected
                      ? t.Surface["info-medium"]
                      : t.Border.default,
                  },
                  selected && styles.radioButtonDot,
                ]}
              >
                {selected && <Entypo name="check" size={16} color="white" />}
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MenuList;