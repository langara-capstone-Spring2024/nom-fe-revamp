import { Button, StyleSheet, View, Text, Switch } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, FormikHelpers } from "formik";
import TextInputField from "../../components/base/TextInputField";
import Ionicons from "@expo/vector-icons/Ionicons";

type Form = { name: string; email: string };

const FormikTextInputFieldCollection = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const [result, setResult] = useState<Form>({
    name: "",
    email: "",
  });

  const initialValues: Form = {
    name: "",
    email: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Your name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Your email is required"),
  });

  const handleSubtmit = (
    values: Form,
    formikHelpers: FormikHelpers<{
      name: string;
      email: string;
    }>
  ) => {
    console.log(values);
    setResult(values);
    formikHelpers.resetForm({ values: initialValues });
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "black" : "white" },
      ]}
    >
      <View
        style={{
          marginBottom: 32,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Ionicons name="moon" color={isDarkMode ? "white" : "black"} />
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
      </View>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubtmit}
      >
        {({ handleChange, handleSubmit, values, touched, errors }) => (
          <>
            <View style={{ marginBottom: 32 }}>
              <TextInputField
                label="Name"
                placeholder="Name"
                value={values.name}
                setValue={handleChange("name")}
                leftIcon={<Ionicons name="person" size={24} />}
                error={touched.name ? errors.name : ""}
                isDarkMode={isDarkMode}
              />
            </View>
            <View style={{ marginBottom: 32 }}>
              <TextInputField
                label="Email"
                placeholder="Email"
                value={values.email}
                setValue={handleChange("email")}
                leftIcon={<Ionicons name="mail" size={24} />}
                error={touched.email ? errors.email : ""}
                isDarkMode={isDarkMode}
              />
            </View>
            <Button title="Submit" onPress={() => handleSubmit()} />
          </>
        )}
      </Formik>
      <Text style={{ color: isDarkMode ? "white" : "black" }}>
        Name : {result.name}
      </Text>
      <Text style={{ color: isDarkMode ? "white" : "black" }}>
        Email : {result.email}
      </Text>
    </View>
  );
};

export default FormikTextInputFieldCollection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
