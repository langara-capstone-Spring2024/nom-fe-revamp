import React, { useState } from "react";
import LoginView from "./Login.view";
import { useStore } from "../../store";
import { useLoginMutation } from "../../services/react-query/queries/auth";

const Login = (): JSX.Element => {
  const [email, setEmail] = useState("consumer@test.com");
  const [password, setPassword] = useState("123123");
  const { setIsLoggedIn, setTokens } = useStore((state) => ({
    setIsLoggedIn: state.setIsLoggedIn,
    setTokens: state.setTokens,
  }));

  const onEmailChange = (text: string) => {
    setEmail(text);
  };

  const onPasswordChange = (text: string) => {
    setPassword(text);
  };

  const loginMutation = useLoginMutation();

  const onLogin = async () => {
    try {
      console.log(email, password);
      const credentials = { email, password };

      loginMutation.mutate(credentials, {
        onSuccess: (result) => {
          console.log(result);
          const { accessToken, refreshToken } = result;
          setTokens(accessToken, refreshToken);
          setIsLoggedIn(true);

          // for displaying what's saved on AsyncStorage
          useStore.getState().displayAsyncStorageData();
        },
        onError: (error) => {
          console.error("Login Error:", error);
        },
      });
    } catch (error) {
      console.error("Unknown Error:", error);
    }
  };

  return (
    <LoginView
      email={email}
      password={password}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      onLogin={onLogin}
    />
  );
};

export default Login;
