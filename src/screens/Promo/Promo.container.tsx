import { MarkedDates } from "react-native-calendars/src/types";
import PromoView from "./Promo.view";
import { useCallback, useState } from "react";
import { GetAllActiveDiscount } from "../../services/react-query/queries/discount";
import { Text, Alert } from "react-native";

const Promo = () => {
  const currentDate = new Date();
  const INITIAL_DATE = currentDate.toISOString().split("T")[0];
  const formattedDate = currentDate.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const handleAgendaPress = useCallback(() => {
    Alert.alert("test");
  }, []);

  const handleButtonPress = useCallback(() => {
    Alert.alert("Show me more");
  }, []);

  const onDateChanged = useCallback((date: any, updateSource: any) => {
    console.log("DateChanged: ", date, updateSource);
  }, []);

  const onMonthChanged = useCallback(
    (dateString: any, newVisibleMonths: string[]) => {
      console.log("DateChanged: ", dateString);
      const currentMonth = currentDate.getMonth() + 1;
      const minMonth = currentMonth - 2;
      const maxMonth = currentMonth + 2;

      if (dateString.month > maxMonth || dateString.month < minMonth) {
        alert("You cannot view other months");
      }
    },
    []
  );

  const getFutureDates = (numberOfDays: number) => {
    const array: string[] = [];
    for (let index = 1; index <= numberOfDays; index++) {
      let d = Date.now();
      if (index > 8) {
        // set dates on the next month
        const newMonth = new Date(d).getMonth() + 1;
        d = new Date(d).setMonth(newMonth);
      }
      const date = new Date(d + 864e5 * index); // 864e5 == 86400000 == 24*60*60*1000
      const dateString = date.toISOString().split("T")[0];
      array.push(dateString);
    }
    return array;
  };

  const getPastDate = (numberOfDays: number) => {
    return new Date(Date.now() - 864e5 * numberOfDays)
      .toISOString()
      .split("T")[0];
  };

  const {
    data: activeDiscounts,
    error: activeDiscountsError,
    status: activeDiscountsStatus,
  } = GetAllActiveDiscount();
  if (activeDiscountsStatus === "pending") {
    return <Text>Loading...</Text>;
  }
  if (activeDiscountsError) {
    console.error("Error fetching discounts:", activeDiscountsError);
  }
  console.log(activeDiscounts);

  const getMarkedDates = () => {
    const marked: MarkedDates = {};
    if (activeDiscounts) {
      activeDiscounts.forEach((item: any) => {
        // NOTE: only mark dates with data
        console.log("item: ", item);
        if (item.data && item.data.length > 0) {
          marked[item.title] = { marked: true };
        } else {
          marked[item.title] = { disabled: true };
        }
      });
    }
    return marked;
  };

  const today = new Date().toISOString().split("T")[0];
  const fastDate = getPastDate(3);
  const futureDates = getFutureDates(12);
  const dates = [fastDate, today].concat(futureDates);

  const handleAddDiscount = () => {
    console.log("pressed");
  };

  const generatedProps = {
    // generated props here
    activeDiscounts,
    onDateChanged,
    onMonthChanged,
    getMarkedDates,
    INITIAL_DATE,
    formattedDate,
    handleAgendaPress,
    handleButtonPress,
    handleAddDiscount,
  };
  return <PromoView {...generatedProps} />;
};

export default Promo;
