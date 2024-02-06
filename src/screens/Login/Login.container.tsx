import React, { useState } from "react";
import LoginView from "./Login.view";
import { useStore } from "../../store";
const Login = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (text: React.SetStateAction<string>) => {
    setEmail(text);
  };
  const onPasswordChange = (text: React.SetStateAction<string>) => {
    setPassword(text);
  };

  const { isLoggedIn, setIsLoggedIn } = useStore((state) => ({
    setIsLoggedIn: state.setIsLoggedIn,
    isLoggedIn: state.isLoggedIn,
  }));

  const onLogin = async () => {
    try {
      console.log(email, password);
      setIsLoggedIn(true);
    } catch (error) {}
  };

  const generatedProps = {
    // generated props here
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onLogin,
  };
  return <LoginView {...generatedProps} />;
};

export default Login;
