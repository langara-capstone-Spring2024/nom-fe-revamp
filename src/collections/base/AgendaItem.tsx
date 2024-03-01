import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import AgendaItem from "../../components/base/AgendaItem";

const AgendaItemCollection = () => {
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

  const renderItem = ({ item }: any) => <AgendaItem item={item.data[0]} />;

  return <FlatList data={items} renderItem={renderItem} />;
};

export default AgendaItemCollection;

const styles = StyleSheet.create({});
