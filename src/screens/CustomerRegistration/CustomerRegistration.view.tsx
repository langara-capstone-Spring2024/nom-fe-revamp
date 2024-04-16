import { View, Text, SafeAreaView } from "react-native";
import createStyles from "./CustomerRegistration.style";
import { CustomerRegistrationGeneratedProps } from "./CustomerRegistration.props";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import { theme as t } from "../../utils/Theme";
import { Formik } from "formik";
import TextInputField from "../../components/base/TextInputField";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../../components/base/Button";

const CustomerRegistration = (props: CustomerRegistrationGeneratedProps) => {
  const { basicInitialValues, basicValidationSchema, handleSubmit } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: t.Surface.default,
      }}
    >
      <View style={{ flex: 1, padding: 16 }}>
        <Formik
          initialValues={basicInitialValues}
          validationSchema={basicValidationSchema}
          onSubmit={handleSubmit}
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
      </View>
    </SafeAreaView>
  );
};

export default CustomerRegistration;
