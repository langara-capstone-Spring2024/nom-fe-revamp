import { View, Text, Pressable } from "react-native";
import * as Yup from "yup";
import { Formik, FormikHelpers } from "formik";
import { MerchantRegistrationProps } from "./MerchantRegistration.props";
import createStyles from "./MerchantRegistration.style";
import React, { useMemo, useState } from "react";
import { useTheme } from "react-native-paper";
import TextInputField from "../../base/TextInputField";
import Button from "../../base/Button";
import AutoComplete from "../../base/AutoComplete";
import { Option, Place } from "../../../types";
import Dropdown from "../../base/Dropdown";
import { LinearProgress, Overlay } from "react-native-elements";
import Typography from "../../base/Typography";
import DateTimeSelector from "../../base/DateTimeSelector";

type Form = {
  name: string;
  category: string;
  place: Place | undefined;
  address: string;
};

type Day = {
  time: Option;
  initial: string;
  open?: Date;
  close?: Date;
};

const MerchantRegistration = (props: MerchantRegistrationProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const options: Option[] = [
    { value: "value1", label: "label1" },
    { value: "value2", label: "label2" },
    { value: "value3", label: "label3" },
    { value: "value4", label: "label4" },
    { value: "value5", label: "label5" },
  ];

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [days, setDays] = useState<Day[]>([
    {
      time: { value: "sun", label: "Sunday" },
      initial: "S",
    },
    {
      time: { value: "mon", label: "Monday" },
      initial: "M",
    },
    {
      time: { value: "tue", label: "Tuesday" },
      initial: "T",
    },
    {
      time: { value: "wed", label: "Wednesday" },
      initial: "W",
    },
    {
      time: { value: "thur", label: "Thursday" },
      initial: "T",
    },
    {
      time: { value: "fri", label: "Friday" },
      initial: "F",
    },
    {
      time: { value: "sat", label: "Saturday" },
      initial: "S",
    },
  ]);
  const [selectedDay, setSelectedDay] = useState<Day>();
  const [inputOpenTime, setInputOpenTime] = useState<Date>(new Date());
  const [inputCloseTime, setInputCloseTime] = useState<Date>(new Date());

  const initialValues: Form = {
    name: "",
    category: "",
    place: undefined,
    address: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Your name is required"),
    category: Yup.string().required("Your category is required"),
    place: Yup.object({
      address: Yup.string().required(),
      longitude: Yup.number().required(),
      latitude: Yup.number().required(),
    }).required(),
    address: Yup.string().required("Your address is required"),
  });

  const handleSubtmit = (values: Form, formikHelpers: FormikHelpers<Form>) => {
    console.log(values);
    formikHelpers.resetForm({ values: initialValues });
  };

  const handleSelectDay = (selectedDay: Day) => {
    setSelectedDay(selectedDay);
    if (selectedDay.open) {
      setInputOpenTime(selectedDay.open);
    }
    if (selectedDay.close) {
      setInputCloseTime(selectedDay.close);
    }

    setIsVisible(true);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  const handleSave = () => {
    setDays((oldDays) =>
      oldDays.map((oldDay) =>
        oldDay.time.value === selectedDay?.time.value
          ? { ...oldDay, open: inputOpenTime, close: inputCloseTime }
          : oldDay
      )
    );

    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubtmit}
      >
        {({ handleChange, handleSubmit, values, touched, errors }) => (
          <>
            <View style={{ marginBottom: 16 }}>
              <LinearProgress
                value={0.5}
                variant="determinate"
                color="gray"
                style={{ borderRadius: 8 }}
              />
            </View>
            <View style={{ marginBottom: 16 }}>
              <TextInputField
                label="Restaurant Name"
                value={values.name}
                setValue={handleChange("name")}
                error={touched.name ? errors.name : ""}
              />
            </View>
            <View style={{ marginBottom: 16 }}>
              <Dropdown
                label="Category"
                placeholder="Select restaurant category"
                options={options}
                value={values.category}
                setValue={handleChange("category")}
                error={touched.category ? errors.category : ""}
              />
            </View>
            <View style={{ marginBottom: 16 }}>
              <AutoComplete
                label="Location"
                value={values.place}
                setValue={(place) => {
                  if (place.address) {
                    handleChange("place.address")(place.address || "");
                    handleChange("place.longitude")(
                      place.longitude?.toString() || ""
                    );
                    handleChange("place.latitude")(
                      place.latitude?.toString() || ""
                    );
                    handleChange("address")(place.address || "");
                  }
                }}
                error={touched.address ? errors.address : ""}
              />
            </View>
            <View style={{ marginBottom: 16 }}>
              <Text style={{ marginBottom: 8 }}>Open Hours</Text>
              <View
                style={{
                  borderColor: "lightgray",
                  borderRadius: 16,
                  borderWidth: 1,
                  backgroundColor: "white",
                }}
              >
                {days.map((day, index) => (
                  <Pressable
                    onPress={() => handleSelectDay(day)}
                    style={[
                      {
                        padding: 16,
                      },
                      days.length - 1 !== index
                        ? {
                            borderBottomColor: "lightgray",
                            borderBottomWidth: 1,
                          }
                        : undefined,
                    ]}
                    key={index}
                  >
                    <Text>{day.time.label}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
            <Overlay
              isVisible={isVisible}
              overlayStyle={{ width: "80%", borderRadius: 16 }}
            >
              <View style={{ marginBottom: 16 }}>
                <Typography variant="title3" alignment="center">
                  Select days and time
                </Typography>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: 4,
                  marginBottom: 16,
                }}
              >
                {days.map((day, index) => (
                  <View
                    style={{
                      backgroundColor:
                        day.time.value === selectedDay?.time.value
                          ? "red"
                          : "lightgray",
                      borderRadius: 8,
                      width: "10%",
                      aspectRatio: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    key={index}
                  >
                    <Typography
                      color={
                        day.time.value === selectedDay?.time.value
                          ? "white-strong"
                          : undefined
                      }
                    >
                      {day.initial}
                    </Typography>
                  </View>
                ))}
              </View>
              <View
                style={{
                  marginBottom: 16,
                  flexDirection: "row",
                  alignItems: "flex-start",
                }}
              >
                <DateTimeSelector
                  mode="time"
                  display="default"
                  date={inputOpenTime}
                  setDate={setInputOpenTime}
                  onChange={() => null}
                />
                <DateTimeSelector
                  mode="time"
                  display="default"
                  date={inputCloseTime}
                  setDate={setInputCloseTime}
                />
              </View>
              <View>
                <Pressable onPress={handleCancel}>
                  <Text>Cancel</Text>
                </Pressable>
                <Pressable onPress={handleSave}>
                  <Text>Save</Text>
                </Pressable>
              </View>
            </Overlay>
            <Button text="Next" onPress={() => handleSubmit()} takeFullWidth />
          </>
        )}
      </Formik>
    </View>
  );
};

export default MerchantRegistration;
