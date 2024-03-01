import { MarkedDates } from "react-native-calendars/src/types";
import PromoView from "./Promo.view";
import { useCallback } from "react";

const Promo = () => {
  const onDateChanged = useCallback((date: any, updateSource: any) => {
    console.log("DateChanged: ", date, updateSource);
  }, []);

  const onMonthChanged = useCallback((dateString: any) => {
    console.log("DateChanged: ", dateString);
  }, []);

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

  const getMarkedDates = () => {
    const marked: MarkedDates = {};

    items.forEach((item) => {
      // NOTE: only mark dates with data
      if (item.data && item.data.length > 0) {
        marked[item.title] = { marked: true };
      } else {
        marked[item.title] = { disabled: true };
      }
    });
    return marked;
  };

  const today = new Date().toISOString().split("T")[0];
  const fastDate = getPastDate(3);
  const futureDates = getFutureDates(12);
  const dates = [fastDate, today].concat(futureDates);

  // when we do the fetch of data on backend the object should be pushed to array ion this structure
  const items = [
    {
      title: "2024-02-26",
      data: [
        {
          title: "4:00 pm Happy Hour",
          startTime: "4:00 PM",
          endTime: "6:00 PM",
          discount: 30,
          menuCount: 5,
          discountCount: 15,
        },
        {
          title: "4:00 pm Happy Hour",
          startTime: "4:00 PM",
          endTime: "6:00 PM",
          discount: 30,
          menuCount: 5,
          discountCount: 15,
        },
      ],
    },
    {
      title: "2024-02-27",
      data: [
        {
          title: "4:00 pm Happy Hour",
          startTime: "4:00 PM",
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
          title: "3:30 pm Happy Hour",
          startTime: "3:30 PM",
          endTime: "6:30 PM",
          discount: 25,
          menuCount: 5,
          discountCount: 10,
        },
        {
          title: "3:30 pm Happy Hour",
          startTime: "3:30 PM",
          endTime: "6:30 PM",
          discount: 25,
          menuCount: 5,
          discountCount: 10,
        },
        {
          title: "3:30 pm Happy Hour",
          startTime: "3:30 PM",
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
          title: "7:30 am Happy Hour",
          startTime: "7:30 AM",
          endTime: "9:00 AM",
          discount: 15,
          menuCount: 8,
          discountCount: 20,
        },
        {
          title: "7:30 am Happy Hour",
          startTime: "7:30 AM",
          endTime: "9:00 AM",
          discount: 15,
          menuCount: 8,
          discountCount: 20,
        },
        {
          title: "7:30 am Happy Hour",
          startTime: "7:30 AM",
          endTime: "9:00 AM",
          discount: 15,
          menuCount: 8,
          discountCount: 20,
        },
      ],
    },
  ];

  const generatedProps = {
    // generated props here
    items,
    onDateChanged,
    onMonthChanged,
    getMarkedDates,
  };
  return <PromoView {...generatedProps} />;
};

export default Promo;
