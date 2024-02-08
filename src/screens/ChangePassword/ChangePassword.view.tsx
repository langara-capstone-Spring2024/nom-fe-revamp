import { View, Text } from "react-native";
import styles from "./ChangePassword.style";
import { ChangePasswordGeneratedProps } from "./ChangePassword.props";
import TextInputField from "../../components/base/TextInputField";
import Button from "../../components/base/Button";

const ChangePassword = (props: ChangePasswordGeneratedProps) => {
  return (
    <View>
      <TextInputField
        label="Email"
        placeholder="Email"
        value={props.email}
        setValue={props.setEmail}
      />
      <TextInputField
        label="Current Password"
        placeholder="Current Password"
        value={props.currentPassword}
        setValue={props.setCurrentPassword}
        secured
      />

      <TextInputField
        label="New Password"
        placeholder="New Password"
        value={props.newPassword}
        setValue={props.setNewPassword}
        secured
      />

      <TextInputField
        label="Confirm New Password"
        placeholder="Confirm New Password"
        value={props.confirmNewPassword}
        setValue={props.setConfirmNewPassword}
        secured
      />

      <Button
        variant="primary"
        buttonSize="sm"
        text="Change Password"
        takeFullWidth
        onPress={props.changePasswordMethod}
      />
    </View>
  );
};

export default ChangePassword;
