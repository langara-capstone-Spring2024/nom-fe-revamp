import { TouchableOpacity, View } from "react-native";
import createStyles from "./Promo.style";
import { PromoGeneratedProps } from "./Promo.props";
import React, { useMemo, useCallback, useRef } from "react";
import { useTheme } from "react-native-paper";
import { AgendaList, CalendarProvider } from "react-native-calendars";
import ExpandableCalendarComponent from "../../components/base/ExpandableCalendarComponent";
import AgendaItem from "../../components/base/AgendaItem";
import Typography from "../../components/base/Typography";
import { AntDesign } from "@expo/vector-icons";

const Promo = (props: PromoGeneratedProps) => {
  const {
    activeDiscounts,
    onDateChanged,
    onMonthChanged,
    INITIAL_DATE,
    getMarkedDates,
    formattedDate,
    handleAgendaPress,
    handleButtonPress,
    handleAddDiscount,
  } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const marked = useRef(getMarkedDates());
  console.log(marked);
  const renderItem = useCallback(({ item, section }: any) => {
    return (
      <AgendaItem
        item={item}
        title={section.title}
        handlePress={handleAgendaPress}
        handleButtonPress={handleButtonPress}
      />
    );
  }, []);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <CalendarProvider
        date={INITIAL_DATE}
        onDateChanged={onDateChanged}
        onMonthChange={onMonthChanged}
        disabledOpacity={0.6}
        todayBottomMargin={16}
      >
        <ExpandableCalendarComponent markedDates={marked.current} />
        {activeDiscounts ? (
          <AgendaList
            sections={activeDiscounts}
            renderItem={renderItem}
            sectionStyle={styles.section}
          />
        ) : (
          <View style={styles.noResultContainer}>
            <View style={styles.dateHeader}>
              <Typography
                variant="bodyXs"
                weight="700"
                color="subtle"
                otherStyle={{ textTransform: "uppercase" }}
              >
                {formattedDate}
              </Typography>
              <Typography variant="bodyXs" color="subtle">
                0 Promos
              </Typography>
            </View>
            <Typography color="subtle" alignment="center">
              There are no listed promotions right now...
            </Typography>
          </View>
        )}
      </CalendarProvider>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity
          onPress={handleAddDiscount}
          style={styles.fixedAddButton}
        >
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Promo;
