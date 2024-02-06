import { View } from "react-native";
import Button from "../../components/base/Button";
import TextInputField from "../..//components/base/TextInputField";
import { LoginGeneratedProps } from "./Login.props";
import styles from "./Login.styles";

const LoginView = (props: LoginGeneratedProps) => {
  const { email, password, onEmailChange, onPasswordChange, onLogin } = props;
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInputField
          label="Email"
          placeholder="email"
          value={email}
          setValue={onEmailChange}
        />
        <TextInputField
          label="Password"
          placeholder="password"
          secured
          value={password}
          setValue={onPasswordChange}
        />

        <Button
          text="Sign In"
          variant="primary"
          buttonSize="md"
          onPress={onLogin}
        />
      </View>
    </View>
  );
};

export default LoginView;
