import { Image, Pressable, View } from "react-native";
import { LoginGeneratedProps } from "./Login.props";
import styles from "./Login.styles";
import { Formik } from "formik";
import Button from "../../components/base/Button";
import TextInputField from "../../components/base/TextInputField";
import Typography from "../../components/base/Typography";
import NavigationService from "../../navigation/NavigationService";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LoginView = (props: LoginGeneratedProps) => {
  const { isErrorOnSignin, initialValues, validationSchema, handleSubmit } =
    props;

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={{ flex: 1 }}
    >
      <Image
        source={require("../../../assets/login.jpg")}
        style={styles.image}
      />
      <View style={styles.formContainer}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ handleChange, handleSubmit, values, touched, errors }) => (
            <>
              <View style={{ gap: 16 }}>
                <View style={{ flexDirection: "row", gap: 16 }}>
                  <Typography variant="title2" weight="700">
                    Welcome back!
                  </Typography>
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
              </View>
              <View>
                <Button
                  text="Login"
                  buttonSize="lg"
                  onPress={() => handleSubmit()}
                  takeFullWidth
                />
                {isErrorOnSignin && (
                  <Typography alignment="center" color="error-medium">
                    Failed to login
                  </Typography>
                )}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 4,
                  }}
                >
                  <Typography variant="bodyXs" color="subtle">
                    Don't have an account?
                  </Typography>
                  <Pressable
                    onPress={() =>
                      NavigationService.navigate("RegistrationRole")
                    }
                  >
                    <Typography
                      variant="bodyXs"
                      color="info-medium"
                      otherStyle={{ textDecorationLine: "underline" }}
                    >
                      Sign Up
                    </Typography>
                  </Pressable>
                </View>
              </View>
            </>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginView;
