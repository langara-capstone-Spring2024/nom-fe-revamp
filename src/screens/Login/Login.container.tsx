import React, { useState } from "react";
import LoginView from "./Login.view";
import { apiClient } from "../../services/client";
import { useStore } from "../../store";
import axios from "axios";

const Login = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const onLogin = async () => {
    try {
      console.log(email, password);
      const response = await apiClient.post("auth/login", {
        email: email,
        password: password,
      });

      const { accessToken } = response.data;

      // Set tokens in the store
      setTokens(accessToken, "");

      // Set isLoggedIn state to true
      setIsLoggedIn(true);

      // Navigate to the next screen or perform any other action
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle login error
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
