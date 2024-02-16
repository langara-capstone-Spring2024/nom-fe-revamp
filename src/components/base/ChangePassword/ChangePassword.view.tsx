import { View, Text } from "react-native";
import { ChangePasswordProps } from "./ChangePassword.props";
import styles from "./ChangePassword.style";
import TextInputField from "./../../base/TextInputField";
import Button from "./../../base/Button";

const ChangePassword = (props: ChangePasswordProps) => {
  const {
    email,
    setEmail,
    currentPassword,
    setCurrentPassword,
    newPassword,
    setNewPassword,
    confirmNewPassword,
    setConfirmNewPassword,
    changePasswordMethod,
  } = props;

  return (
    <View>
      <TextInputField
        label="Email"
        placeholder="Email"
        value={email}
        setValue={setEmail}
      />

      <TextInputField
        label="Current Password"
        placeholder="Current Password"
        value={currentPassword}
        setValue={setCurrentPassword}
        secured
      />

      <TextInputField
        label="New Password"
        placeholder="New Password"
        value={newPassword}
        setValue={setNewPassword}
        secured
      />

      <TextInputField
        label="Confirm New Password"
        placeholder="Confirm New Password"
        value={confirmNewPassword}
        setValue={setConfirmNewPassword}
        secured
      />

      <Button
        variant="primary"
        buttonSize="sm"
        text="Change Password"
        takeFullWidth
        onPress={changePasswordMethod}
      />
    </View>
  );
};

export default ChangePassword;
