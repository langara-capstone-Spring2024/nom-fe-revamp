import { View, Text } from "react-native";
import createStyles from "./PromoDetails.style";
import { PromoDetailsGeneratedProps } from "./PromoDetails.props";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Accordion from "../../components/base/Accordion";
import List from "../../components/base/List";
import Button from "../../components/base/Button";
import { useStore } from "../../store";

const PromoDetails = (props: PromoDetailsGeneratedProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { accordionList, handleSubmitDiscount, selectedItem } = props;
  const expandedStatus = useStore((state) => state.accordionExpanded);

  return (
    <View style={styles.promoDetailsContainer}>
      <View style={styles.promoMain}>
        <Accordion title="Details" expanded={expandedStatus}>
          {accordionList.map((item, index) => (
            <List key={index} {...item} />
          ))}
        </Accordion>
      </View>
      {!selectedItem && (
        <View style={styles.promoFooter}>
          <Button
            text="Create Promo"
            variant="primary"
            buttonSize="md"
            takeFullWidth
            onPress={handleSubmitDiscount}
          />
        </View>
      )}
    </View>
  );
};

export default PromoDetails;
