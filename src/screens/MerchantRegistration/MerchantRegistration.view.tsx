import { View, ScrollView, SafeAreaView, Image } from "react-native";
import createStyles from "./MerchantRegistration.style";
import { MerchantRegistrationGeneratedProps } from "./MerchantRegistration.props";
import React, { useMemo } from "react";
import * as Progress from "react-native-progress";
import { theme as t } from "../../utils/Theme";
import { useTheme } from "react-native-paper";
import Button from "../../components/base/Button";
import TextInputField from "../../components/base/TextInputField";
import { Formik } from "formik";
import MultipleImagePicker from "../../components/base/MultipleImagePicker";
import Dropdown from "../../components/base/Dropdown";
import AutoComplete from "../../components/base/AutoComplete";
import Typography from "../../components/base/Typography";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const MerchantRegistration = (props: MerchantRegistrationGeneratedProps) => {
  const {
    page,
    isErrorRegister,
    basicInitialValues,
    additionalInitialValues,
    businessInitialValues,
    basicValidationSchema,
    additionalValidationSchema,
    businessValidationSchema,
    images,
    setImages,
    handleSubmitBasic,
    handleSubmitAdditional,
    handleSubmitBusiness,
    handleSuccess,
  } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.Surface.default }}>
      <View style={{ padding: 16 }}>
        {(page === 1 || page === 2 || page === 3) && (
          <Progress.Bar
            progress={page / 4}
            color={t.Surface["brand-medium"]}
            unfilledColor={t.Surface["brand-light"]}
            borderWidth={0}
            height={4}
            width={null}
            style={styles.progressBar}
          />
        )}
      </View>
      <KeyboardAwareScrollView
        style={styles.container}
        contentContainerStyle={{
          flex: 1,
          padding: 16,
          paddingBottom: 32,
          justifyContent: "space-between",
        }}
      >
        {page === 1 ? (
          <Formik
            initialValues={basicInitialValues}
            validationSchema={basicValidationSchema}
            onSubmit={handleSubmitBasic}
            enableReinitialize
          >
            {({ handleChange, handleSubmit, values, touched, errors }) => (
              <>
                <View style={{ gap: 16 }}>
                  <View style={{ flexDirection: "row", gap: 16 }}>
                    <View style={{ flex: 1 }}>
                      <TextInputField
                        label="First Name"
                        value={values.firstName}
                        setValue={handleChange("firstName")}
                        error={touched.firstName ? errors.firstName : ""}
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <TextInputField
                        label="Last Name"
                        value={values.lastName}
                        setValue={handleChange("lastName")}
                        error={touched.lastName ? errors.lastName : ""}
                      />
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", gap: 16 }}>
                    <View style={{ flex: 1 }}>
                      <TextInputField
                        label="Email"
                        value={values.email}
                        setValue={handleChange("email")}
                        error={touched.email ? errors.email : ""}
                      />
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", gap: 16 }}>
                    <View style={{ flex: 1 }}>
                      <TextInputField
                        label="Password"
                        value={values.password}
                        setValue={handleChange("password")}
                        error={touched.password ? errors.password : ""}
                        secured
                      />
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", gap: 16 }}>
                    <View style={{ flex: 1 }}>
                      <TextInputField
                        label="Confirm Password"
                        value={values.confirmPassword}
                        setValue={handleChange("confirmPassword")}
                        error={
                          touched.confirmPassword ? errors.confirmPassword : ""
                        }
                        secured
                      />
                    </View>
                  </View>
                </View>
                <View>
                  <Button
                    text="Create Account"
                    buttonSize="lg"
                    onPress={() => handleSubmit()}
                    takeFullWidth
                  />
                </View>
              </>
            )}
          </Formik>
        ) : page === 2 ? (
          <Formik
            initialValues={additionalInitialValues}
            validationSchema={additionalValidationSchema}
            onSubmit={handleSubmitAdditional}
            enableReinitialize
          >
            {({
              handleChange,
              setFieldValue,
              handleSubmit,
              values,
              touched,
              errors,
            }) => (
              <>
                <View style={{ gap: 16 }}>
                  <View style={{ flexDirection: "row", gap: 16 }}>
                    <MultipleImagePicker
                      images={images}
                      setImages={(images) => {
                        setImages(images);
                        setFieldValue("imageNumber", images.length);
                      }}
                      error={touched.imageNumber ? errors.imageNumber : ""}
                    />
                  </View>
                  <View style={{ flexDirection: "row", gap: 16 }}>
                    <View style={{ flex: 1 }}>
                      <TextInputField
                        label="Restaurant Name"
                        value={values.restaurantName}
                        setValue={handleChange("restaurantName")}
                        error={
                          touched.restaurantName ? errors.restaurantName : ""
                        }
                      />
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", gap: 16 }}>
                    <View style={{ flex: 1 }}>
                      <Dropdown
                        label="Category"
                        placeholder="Select restaurant category"
                        options={[
                          { label: "American", value: "American" },
                          { label: "Chinese", value: "Chinese" },
                          { label: "Indian", value: "Indian" },
                          { label: "Italian", value: "Italian" },
                          { label: "Japanese", value: "Japanese" },
                          { label: "Korean", value: "Korean" },
                          { label: "Mexican", value: "Mexican" },
                          { label: "Thai", value: "Thai" },
                          { label: "Others", value: "Others" },
                        ]}
                        value={values.category}
                        setValue={handleChange("category")}
                        error={touched.category ? errors.category : ""}
                      />
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", gap: 16 }}>
                    <View style={{ flex: 1 }}>
                      <AutoComplete
                        label="Location"
                        value={{
                          address: values.address,
                          latitude: values.latitude,
                          longitude: values.longitude,
                        }}
                        setValue={(place) => {
                          setFieldValue("address", place.address);
                          setFieldValue("latitude", place.latitude);
                          setFieldValue("longitude", place.longitude);
                        }}
                        error={
                          touched.address &&
                          touched.latitude &&
                          touched.longitude
                            ? errors.address ||
                              errors.latitude ||
                              errors.longitude
                            : ""
                        }
                      />
                    </View>
                  </View>
                </View>
                <View>
                  <Button
                    text="Next"
                    buttonSize="lg"
                    onPress={() => handleSubmit()}
                    takeFullWidth
                  />
                </View>
              </>
            )}
          </Formik>
        ) : page === 3 ? (
          <>
            <Formik
              initialValues={businessInitialValues}
              validationSchema={businessValidationSchema}
              onSubmit={handleSubmitBusiness}
              enableReinitialize
            >
              {({ handleChange, handleSubmit, values, touched, errors }) => (
                <>
                  <View style={{ gap: 16 }}>
                    <Image
                      source={require("../../../assets/business.png")}
                      style={{
                        width: "75%",
                        alignSelf: "center",
                      }}
                    />
                    <View style={{ flexDirection: "row", gap: 16 }}>
                      <View style={{ flex: 1 }}>
                        <TextInputField
                          label="Business License Number"
                          value={values.license}
                          setValue={handleChange("license")}
                          error={touched.license ? errors.license : ""}
                        />
                      </View>
                    </View>
                  </View>
                  <View>
                    <Button
                      text="Next"
                      buttonSize="lg"
                      onPress={() => handleSubmit()}
                      takeFullWidth
                    />
                    {isErrorRegister && (
                      <Typography alignment="center" color="error-medium">
                        Failed to register
                      </Typography>
                    )}
                  </View>
                </>
              )}
            </Formik>
          </>
        ) : (
          <>
            <View></View>
            <View style={{ gap: 64 }}>
              <View>
                <Image
                  source={require("../../../assets/registration.png")}
                  style={{ width: "50%", alignSelf: "center" }}
                />
                <Typography variant="title2" alignment="center">
                  Success!
                </Typography>
                <Typography alignment="center">
                  You're ready to start using nom!
                </Typography>
              </View>
              <Button
                text="Explore the app"
                buttonSize="lg"
                onPress={handleSuccess}
                takeFullWidth
              />
            </View>
            <View></View>
          </>
        )}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default MerchantRegistration;
