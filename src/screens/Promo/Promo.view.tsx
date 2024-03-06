import { View } from "react-native";
import createStyles from "./Promo.style";
import { PromoGeneratedProps } from "./Promo.props";
import React, { useMemo, useCallback, useRef } from "react";
import { useTheme } from "react-native-paper";
import { AgendaList, CalendarProvider } from "react-native-calendars";
import ExpandableCalendarComponent from "../../components/base/ExpandableCalendarComponent";
import AgendaItem from "../../components/base/AgendaItem";

const Promo = (props: PromoGeneratedProps) => {
  const { items, onDateChanged, onMonthChanged, INITIAL_DATE, getMarkedDates } =
    props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const marked = useRef(getMarkedDates());
  console.log(marked);
  const renderItem = useCallback(({ item }: any) => {
    return <AgendaItem item={item} />;
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
        {items && (
          <AgendaList
            sections={items}
            renderItem={renderItem}
            sectionStyle={styles.section}
          />
        )}
      </CalendarProvider>
    </View>
  );
};

export default Promo;
