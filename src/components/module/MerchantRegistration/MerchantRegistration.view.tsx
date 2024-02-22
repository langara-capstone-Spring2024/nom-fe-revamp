import { View, Text } from "react-native";
import * as Yup from "yup";
import { Formik, FormikHelpers } from "formik";
import { MerchantRegistrationProps } from "./MerchantRegistration.props";
import createStyles from "./MerchantRegistration.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import TextInputField from "../../base/TextInputField";
import Button from "../../base/Button";
import AutoComplete from "../../base/AutoComplete";
import { Option, Place } from "../../../types";
import Dropdown from "../../base/Dropdown";
import { LinearProgress } from "react-native-elements";

type Form = {
  name: string;
  category: string;
  place: Place | undefined;
  address: string;
};

const MerchantRegistration = (props: MerchantRegistrationProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const options: Option[] = [{ value: "value1", label: "label1" }];

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
              <LinearProgress value={0.5} variant="determinate" color="gray" />
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
            <Button text="Next" onPress={() => handleSubmit()} takeFullWidth />
          </>
        )}
      </Formik>
    </View>
  );
};

export default MerchantRegistration;
