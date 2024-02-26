import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ChangePassword from "../../components/base/ChangePassword";
import { apiClient } from "../../services/client";

const ChangePasswordCollection = () => {
  const [email, setEmail] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");

  const changePasswordMethod = async () => {
    // check if new password equeals to confirom new password
    if (newPassword === confirmNewPassword) {
      try {
        const response = await apiClient.put("auth/change-password", {
          email: email,
          newPassword: newPassword,
          currentPassword: currentPassword,
        });
        console.log("Password changed successfully");
      } catch (error) {
        console.error("Error changing password:", error);
      }
    } else {
      console.log("Password does not match");
      return;
    }
  };

  return (
    <View style={styles.container}>
      <ChangePassword
        email={email}
        setEmail={setEmail}
        currentPassword={currentPassword}
        setCurrentPassword={setCurrentPassword}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        confirmNewPassword={confirmNewPassword}
        setConfirmNewPassword={setConfirmNewPassword}
        changePasswordMethod={changePasswordMethod}
      />
    </View>
  );
};

export default ChangePasswordCollection;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 50,
  },
});