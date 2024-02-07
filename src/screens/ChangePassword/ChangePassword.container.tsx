import ChangePasswordView from "./ChangePassword.view";
import React, { useState } from "react";
import axios from "axios";

const ChangePassword = () => {
  const [email, setEmail] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");

  const fakeStoreApiClient = axios.create({
    baseURL: "http://localhost:8000",
    responseType: "json",
  });

  const changePasswordMethod = async () => {
    // check if new password equeals to confirom new password
    if (newPassword == confirmNewPassword) {
      try {
        const response = await fakeStoreApiClient.put("/change-password", {
          email,
          currentPassword,
          newPassword,
        });

        console.log("Password changed successfully");
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error changing password:", error);
      }
    } else {
      console.log("Password does not match");
      return;
    }

    // if false
    // if(false) {
    //show an error
    // return;
    // }

    // send the request to be
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
