import React, { useEffect, useState } from "react";
import LoginView from "./Login.view";
import { useStore } from "../../store";
import { Signin } from "../../services/react-query/queries/auth";
import { LoginForm } from "./Login.props";
import * as Yup from "yup";

const Login = (): JSX.Element => {
  const { setIsLoggedIn, setTokens, setMerchantId } = useStore((state) => ({
    setIsLoggedIn: state.setIsLoggedIn,
    setTokens: state.setTokens,
    setMerchantId: state.setMerchantId,
  }));

  //const test = useStore.getState().displayAsyncStorageData();
  const [initialValues, setInitialValues] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const validationSchema = Yup.object({
    email: Yup.string().required("Your email is required"),
    password: Yup.string().required("Your password is required"),
  });

  const { mutate: mutateSignin, isError: isErrorOnSignin } = Signin();

  const handleSubmit = (values: LoginForm) => {
    setInitialValues(values);

    mutateSignin(
      { email: values.email, password: values.password },
      {
        onSuccess: (data) => {
          setTokens(data.accessToken, data.refreshToken);
          setIsLoggedIn(true);
          setMerchantId(data.merchantId);
        },
      }
    );
  };

  useEffect(() => {
    if (isErrorOnSignin) {
    }
  }, [isErrorOnSignin]);

  const generatedProps = {
    isErrorOnSignin,
    initialValues,
    validationSchema,
    handleSubmit,
  };
  return <LoginView {...generatedProps} />;
};

export default Login;
