import { View, Text, Image } from "react-native";
import { MenuCardProps } from "./MenuCard.props";
import createStyles from "./MenuCard.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Typography from "../Typography";

const MenuCard = (props: MenuCardProps) => {
  const { itemName, originalPrice, itemDescription, itemImage } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftComponent}>
        <View style={styles.namePrice}>
          <Typography variant="body" alignment="left" color="primary">
          {truncateDescription(itemName, 25)}
          </Typography>
          <Typography variant="bodySm" alignment="left" color="medium">
            {originalPrice}
          </Typography>
        </View>
        <Typography variant="bodySm" alignment="left" color="medium">
          {truncateDescription(itemDescription, 64)}
        </Typography>
      </View>

      <View style={styles.rightComponent}>
        {itemImage ? (
          <Image
            style={styles.imageContainer}
            source={{ uri: itemImage }}
            onError={(e) => {
              console.log(itemImage);
            }}
          />
        ) : (
          <View style={styles.noImageContainer}>
            <Typography variant="bodySm" alignment="center" color="medium">
              No image available
            </Typography>
          </View>
        )}
      </View>
    </View>
  );
};

export default MenuCard;
