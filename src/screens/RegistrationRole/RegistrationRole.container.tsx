import { useState } from "react";
import RegistrationRoleView from "./RegistrationRole.view";
import { Option } from "../../types";
import NavigationService from "../../navigation/NavigationService";

const RegistrationRole = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleContinue = () => {
    if (selectedRole === "merchant") {
      NavigationService.navigate("MerchantRegistration");
    } else if (selectedRole === "consumer") {
      // TODO
      // Navigate to consumer
    } else {
    }
  };

  const handleCancel = () => {
    NavigationService.goBack();
  };

  const generatedProps = {
    selectedRole,
    setSelectedRole,
    handleContinue,
    handleCancel,
  };
  return <RegistrationRoleView {...generatedProps} />;
};

export default RegistrationRole;
