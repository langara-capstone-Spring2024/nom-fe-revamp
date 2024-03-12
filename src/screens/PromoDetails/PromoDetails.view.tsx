import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import createStyles from "./PromoDetails.style";
import { PromoDetailsGeneratedProps } from "./PromoDetails.props";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Accordion from "../../components/base/Accordion";
import List from "../../components/base/List";
import Button from "../../components/base/Button";
import { useStore } from "../../store";
import { Entypo } from "@expo/vector-icons";
import Typography from "../../components/base/Typography";
import NavigationService from "../../navigation/NavigationService";
import ItemList from "../../components/base/ItemList";

const PromoDetails = (props: PromoDetailsGeneratedProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { accordionList, handleSubmitDiscount, selectedItem } = props;
  const expandedStatus = useStore((state) => state.accordionExpanded);
  const RightItemComponent = () => (
    <View>
      <Typography color="inactive">0 Items</Typography>
    </View>
  );

  return (
    <View style={styles.promoDetailsContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.promoMain}>
          <Accordion title="Details" expanded={expandedStatus}>
            {accordionList.map((item, index) => (
              <List key={index} {...item} />
            ))}
          </Accordion>
        </View>
        <View style={styles.promoMain}>
          <Accordion
            title="Items"
            hasRightItem={true}
            rightItem={<RightItemComponent />}
          >
            <TouchableOpacity
              onPress={() => NavigationService.navigate("Items")}
            >
              <List
                title="Add Item"
                hasRightIcon={true}
                rightIcon={
                  <Entypo name="chevron-small-right" size={24} color="black" />
                }
                isLast={true}
                hasBottomDescription={true}
                bottomDescription="Add or edit items"
                style={{ paddingVertical: 40 }}
              />
            </TouchableOpacity>
          </Accordion>
        </View>
      </ScrollView>
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
