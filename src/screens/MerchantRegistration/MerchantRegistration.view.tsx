import { View, SafeAreaView, Image } from "react-native";
import createStyles from "./MerchantRegistration.style";
import { MerchantRegistrationGeneratedProps } from "./MerchantRegistration.props";
import React, { useMemo } from "react";
import * as Progress from "react-native-progress";
import { theme as t } from "../../utils/Theme";
import { Switch, useTheme } from "react-native-paper";
import Button from "../../components/base/Button";
import TextInputField from "../../components/base/TextInputField";
import { Formik } from "formik";
import MultipleImagePicker from "../../components/base/MultipleImagePicker";
import Dropdown from "../../components/base/Dropdown";
import AutoComplete from "../../components/base/AutoComplete";
import Typography from "../../components/base/Typography";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Accordion from "../../components/base/Accordion";
import DateTimeSelector from "../../components/base/DateTimeSelector";

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
    operatingTimes,
    setOperatingTimes,
    setImages,
    handleSubmitBasic,
    handleSubmitAdditional,
    handleSubmitBusiness,
    handleSuccess,
  } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: t.Surface.default,
      }}
    >
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
      <View style={{ flex: 1, padding: 16 }}>
        {page === 1 ? (
          <Formik
            initialValues={basicInitialValues}
            validationSchema={basicValidationSchema}
            onSubmit={handleSubmitBasic}
            enableReinitialize
          >
            {({
              handleChange,
              handleSubmit,
              setTouched,
              values,
              touched,
              errors,
            }) => (
              <>
                <View style={{ flex: 1 }}>
                  <KeyboardAwareScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                      gap: 16,
                    }}
                  >
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
                          setValue={(value) => {
                            setTouched({ password: true });
                            handleChange("password")(value);
                          }}
                          error={
                            touched.password || touched.confirmPassword
                              ? errors.password
                              : ""
                          }
                          secured
                        />
                      </View>
                    </View>
                    <View style={{ flexDirection: "row", gap: 16 }}>
                      <View style={{ flex: 1 }}>
                        <TextInputField
                          label="Confirm Password"
                          value={values.confirmPassword}
                          setValue={(value) => {
                            setTouched({ confirmPassword: true });
                            handleChange("confirmPassword")(value);
                          }}
                          error={
                            touched.password || touched.confirmPassword
                              ? errors.confirmPassword
                              : ""
                          }
                          secured
                        />
                      </View>
                    </View>
                  </KeyboardAwareScrollView>
                </View>
                <View style={styles.buttonContainer}>
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
                <View style={{ flex: 1 }}>
                  <KeyboardAwareScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                      gap: 16,
                    }}
                  >
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
                        <Typography variant="label2" otherStyle={styles.label}>
                          Operating Times
                        </Typography>
                        <View style={{ gap: 8 }}>
                          {operatingTimes.map(
                            (
                              operatingTimeMapItem,
                              operatingTimeMapItemIndex
                            ) => (
                              <Accordion
                                title={operatingTimeMapItem.label}
                                hasRightItem
                                rightItem={
                                  operatingTimeMapItem.isClosed ? (
                                    <Typography>Closed</Typography>
                                  ) : operatingTimeMapItem.isOpen ? (
                                    <Typography>0:00 AM - 11:59 PM</Typography>
                                  ) : (
                                    <Typography>
                                      {12 <
                                      operatingTimeMapItem.openingTime.getHours()
                                        ? operatingTimeMapItem.openingTime.getHours() -
                                          12
                                        : operatingTimeMapItem.openingTime.getHours()}
                                      :
                                      {10 <
                                      operatingTimeMapItem.openingTime.getMinutes()
                                        ? operatingTimeMapItem.openingTime.getMinutes()
                                        : "0" +
                                          operatingTimeMapItem.openingTime.getMinutes()}{" "}
                                      {12 <=
                                      operatingTimeMapItem.openingTime.getHours()
                                        ? "PM"
                                        : "AM"}{" "}
                                      -{" "}
                                      {operatingTimeMapItem.closingTime.getTime() ===
                                      115200000 ? (
                                        "11:59 PM"
                                      ) : (
                                        <>
                                          {12 <
                                          operatingTimeMapItem.closingTime.getHours()
                                            ? operatingTimeMapItem.closingTime.getHours() -
                                              12
                                            : operatingTimeMapItem.closingTime.getHours()}
                                          :
                                          {10 <
                                          operatingTimeMapItem.closingTime.getMinutes()
                                            ? operatingTimeMapItem.closingTime.getMinutes()
                                            : "0" +
                                              operatingTimeMapItem.closingTime.getMinutes()}{" "}
                                          {12 <=
                                          operatingTimeMapItem.closingTime.getHours()
                                            ? "PM"
                                            : "AM"}
                                        </>
                                      )}
                                    </Typography>
                                  )
                                }
                                wrapperStyle={{
                                  borderColor: "white",
                                  borderRadius: 8,
                                }}
                                headerStyle={{
                                  height: "auto",
                                  paddingLeft: undefined,
                                  paddingRight: undefined,
                                  paddingHorizontal: 16,
                                  paddingVertical: 12,
                                }}
                                rightComponentStyle={{
                                  gap: 8,
                                }}
                                iconStyle={{ margin: -4 }}
                                key={operatingTimeMapItemIndex}
                              >
                                <View
                                  style={{
                                    paddingVertical: 16,
                                    gap: 16,
                                  }}
                                >
                                  <View
                                    style={{
                                      flexDirection: "row",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <Typography>Closed</Typography>
                                    <Switch
                                      value={operatingTimeMapItem.isClosed}
                                      onValueChange={(value: boolean) => {
                                        setOperatingTimes((oldValues) =>
                                          oldValues.map(
                                            (oldValue, oldValueIndex) =>
                                              oldValueIndex !==
                                              operatingTimeMapItemIndex
                                                ? oldValue
                                                : {
                                                    ...operatingTimeMapItem,
                                                    isClosed: value,
                                                    isOpen: value
                                                      ? false
                                                      : operatingTimeMapItem.isOpen,
                                                  }
                                          )
                                        );
                                      }}
                                    />
                                  </View>
                                  <View
                                    style={{
                                      flexDirection: "row",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <Typography>24 Hours Open</Typography>
                                    <Switch
                                      value={operatingTimeMapItem.isOpen}
                                      onValueChange={(value: boolean) => {
                                        setOperatingTimes((oldValues) =>
                                          oldValues.map(
                                            (oldValue, oldValueIndex) =>
                                              oldValueIndex !==
                                              operatingTimeMapItemIndex
                                                ? oldValue
                                                : {
                                                    ...operatingTimeMapItem,
                                                    isClosed: value
                                                      ? false
                                                      : operatingTimeMapItem.isClosed,
                                                    isOpen: value,
                                                  }
                                          )
                                        );
                                      }}
                                    />
                                  </View>
                                  {!operatingTimeMapItem.isClosed &&
                                    !operatingTimeMapItem.isOpen && (
                                      <>
                                        <View
                                          style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                          }}
                                        >
                                          <Typography>Opening</Typography>
                                          <DateTimeSelector
                                            date={
                                              operatingTimeMapItem.openingTime
                                            }
                                            setDate={(date: Date) => {
                                              setOperatingTimes((oldValues) =>
                                                oldValues.map(
                                                  (oldValue, oldValueIndex) =>
                                                    oldValueIndex !==
                                                    operatingTimeMapItemIndex
                                                      ? oldValue
                                                      : operatingTimeMapItem.closingTime.getTime() <
                                                        operatingTimeMapItem.openingTime.getTime()
                                                      ? {
                                                          ...operatingTimeMapItem,
                                                          openingTime: date,
                                                          closingTime: new Date(
                                                            date.getTime() +
                                                              900000
                                                          ),
                                                        }
                                                      : {
                                                          ...operatingTimeMapItem,
                                                          openingTime: date,
                                                        }
                                                )
                                              );
                                            }}
                                            mode="time"
                                            onChange={() => null}
                                          />
                                        </View>
                                        <View
                                          style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                          }}
                                        >
                                          <Typography>Closing</Typography>
                                          <DateTimeSelector
                                            date={
                                              operatingTimeMapItem.closingTime
                                            }
                                            setDate={(date: Date) => {
                                              setOperatingTimes((oldValues) =>
                                                oldValues.map(
                                                  (oldValue, oldValueIndex) =>
                                                    oldValueIndex !==
                                                    operatingTimeMapItemIndex
                                                      ? oldValue
                                                      : operatingTimeMapItem.closingTime.getTime() <
                                                        operatingTimeMapItem.openingTime.getTime()
                                                      ? {
                                                          ...operatingTimeMapItem,
                                                          openingTime: new Date(
                                                            date.getTime() -
                                                              900000
                                                          ),
                                                          closingTime: date,
                                                        }
                                                      : {
                                                          ...operatingTimeMapItem,
                                                          closingTime: date,
                                                        }
                                                )
                                              );
                                            }}
                                            mode="time"
                                            onChange={() => null}
                                          />
                                        </View>
                                      </>
                                    )}
                                </View>
                              </Accordion>
                            )
                          )}
                        </View>
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
                  </KeyboardAwareScrollView>
                </View>
                <View style={styles.buttonContainer}>
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
                  <View style={{ flex: 1 }}>
                    <KeyboardAwareScrollView
                      keyboardShouldPersistTaps="handled"
                      contentContainerStyle={{
                        gap: 16,
                      }}
                    >
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
                    </KeyboardAwareScrollView>
                  </View>
                  <View style={styles.buttonContainer}>
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
            <KeyboardAwareScrollView
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{
                gap: 16,
              }}
            >
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
            </KeyboardAwareScrollView>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MerchantRegistration;
