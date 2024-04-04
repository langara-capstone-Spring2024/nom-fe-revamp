import { useNavigation, } from '@react-navigation/native';
import CustomerRegistrationView from './CustomerRegistration.view';
import { useStore } from '../../store';
import { useEffect, useState } from 'react';
import { BasicForm } from './CustomerRegistration.props';
import NavigationService from "../../navigation/NavigationService";
import { AddMerchant, Register, Signin } from '../../services/react-query/queries/auth';
import * as Yup from "yup";

const CustomerRegistration = () => {
  const navigation = useNavigation

  const { setIsLoggedIn, setTokens } = useStore((state) => ({
    setIsLoggedIn: state.setIsLoggedIn,
    setTokens: state.setTokens,
  }));

  const [basicInitialValues, setBasicInitialValues] = useState<BasicForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const {
    data: user,
    mutate: mutateRegister,
    isError: isErrorRegister,
  } = Register();
  const { data: merchant, mutate: mutateMerchant } = AddMerchant();
  const { mutate: mutateSignin } = Signin();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerShown: true,
  //   });
  // });

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
    mutateRegister({
      email: basicInitialValues.email,
      password: basicInitialValues.password,
      firstName: basicInitialValues.firstName,
      lastName: basicInitialValues.lastName,
      role: "customer",
    });
  };

  const generatedProps = {
    basicInitialValues,
    basicValidationSchema,
    handleSubmit
    // generated props here
  };
  return <CustomerRegistrationView {...generatedProps} />;
};

export default CustomerRegistration;
