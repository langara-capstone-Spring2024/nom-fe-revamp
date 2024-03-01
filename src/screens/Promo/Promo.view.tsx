import { View, Text, ScrollView } from "react-native";
import createStyles from "./Promo.style";
import { PromoGeneratedProps } from "./Promo.props";
import React, { useMemo, useCallback } from "react";
import { useTheme } from "react-native-paper";
import { AgendaList, CalendarProvider } from "react-native-calendars";
import ExpandableCalendarComponent from "../../components/base/ExpandableCalendarComponent";
import AgendaItem from "../../components/base/AgendaItem";

const Promo = (props: PromoGeneratedProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const currentDate = new Date();
  const INITIAL_DATE = currentDate.toISOString().split("T")[0];

  const onDateChanged = useCallback((date: any, updateSource: any) => {
    console.log("DateChanged: ", date, updateSource);
  }, []);

  const onMonthChanged = useCallback((dateString: any) => {
    console.log("DateChanged: ", dateString);
  }, []);

  const items = [
    {
      title: "2024-02-27",
      data: [
        {
          hour: "4:00 PM",
          endTime: "6:00 PM",
          discount: 30,
          menuCount: 5,
          discountCount: 15,
        },
      ],
    },
    {
      title: "2024-03-01",
      data: [
        {
          hour: "3:30 PM",
          endTime: "6:30 PM",
          discount: 25,
          menuCount: 5,
          discountCount: 10,
        },
      ],
    },
    {
      title: "2024-03-02",
      data: [
        {
          hour: "7:30 AM",
          endTime: "9:00 AM",
          discount: 15,
          menuCount: 8,
          discountCount: 20,
        },
      ],
    },
  ];

  const renderItem = useCallback(({ item }: any) => {
    return <AgendaItem item={item} />;
  }, []);

  return (
    <ScrollView>
      <CalendarProvider
        date={INITIAL_DATE}
        onDateChanged={onDateChanged}
        onMonthChange={onMonthChanged}
        disabledOpacity={0.6}
        todayBottomMargin={16}
      >
        <ExpandableCalendarComponent />
        <AgendaList
          sections={items}
          renderItem={renderItem}
          sectionStyle={styles.section}
        />
      </CalendarProvider>
    </ScrollView>
  );
};

export default Promo;
