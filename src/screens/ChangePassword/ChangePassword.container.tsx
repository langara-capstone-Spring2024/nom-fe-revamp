import ChangePasswordView from "./ChangePassword.view";
import React, { useState } from "react";
import { apiClient } from "../../services/client";

const ChangePassword = () => {
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

  const generatedProps = {
    email,
    setEmail,
    currentPassword,
    setCurrentPassword,
    newPassword,
    setNewPassword,
    confirmNewPassword,
    setConfirmNewPassword,
    changePasswordMethod,
  };

  return <ChangePasswordView {...generatedProps} />;
};

export default ChangePassword;
