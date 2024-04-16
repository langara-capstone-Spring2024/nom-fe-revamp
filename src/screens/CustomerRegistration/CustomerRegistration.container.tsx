import { useNavigation } from "@react-navigation/native";
import CustomerRegistrationView from "./CustomerRegistration.view";
import { useStore } from "../../store";
import { useEffect, useState } from "react";
import { BasicForm } from "./CustomerRegistration.props";
import NavigationService from "../../navigation/NavigationService";
import {
  AddConsumer,
  Register,
  Signin,
} from "../../services/react-query/queries/auth";
import * as Yup from "yup";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CustomerRegistration = () => {
  const navigation = useNavigation();

  const { mutate: mutateSignin } = Signin();
  const { mutate: mutateRegister } = Register();
  const { mutate: mutateAddConsumer } = AddConsumer();

  const { setIsLoggedIn, setTokens } = useStore((state) => ({
    setIsLoggedIn: state.setIsLoggedIn,
    setTokens: state.setTokens,
  }));

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Create your account",
      headerLeft: () => {
        return (
          <Pressable
            onPress={() => {
              NavigationService.goBack();
            }}
            style={{ paddingLeft: 16, margin: 8 }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
        );
      },
    });
  });

  const [basicInitialValues, setBasicInitialValues] = useState<BasicForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const basicValidationSchema = Yup.object({
    firstName: Yup.string().required("Your first name is required"),
    lastName: Yup.string().required("Your last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Your email is required"),
    password: Yup.string()
      .required("Your password is required")
      .min(6, "Your password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Your confirm password is required")
      .oneOf(
        [Yup.ref("password")],
        "Your password and confirm password must match"
      )
      .min(6, "Your password must be at least 6 characters"),
  });

  const handleSubmit = (values: BasicForm) => {
    console.log(values);
    setBasicInitialValues(values);
    mutateRegister(
      {
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        role: "consumer",
      },
      {
        onSuccess: (data) => {
          mutateSignin(
            {
              email: values.email,
              password: values.password,
            },
            {
              onSuccess: (loginData) => {
                setTokens(loginData.accessToken, loginData.refreshToken);
                setIsLoggedIn(true);
              },
              onError: (error) => {
                console.error("Sign-in Error:", error);
              },
            }
          );
        },
        onError: (error) => {
          console.error("Registration Error:", error);
        },
      }
    );
  };

  const generatedProps = {
    basicInitialValues,
    basicValidationSchema,
    handleSubmit,
  };
  return <CustomerRegistrationView {...generatedProps} />;
};

export default CustomerRegistration;
