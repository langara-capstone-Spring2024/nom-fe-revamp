import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useStore } from "../../store";
import AccountView from "./Account.view";

const Account = () => {
  const { accessToken } = useStore((state) => ({
    accessToken: state.accessToken,
  }));

  const [role, setRole] = useState<string>("");

  useEffect(() => {
    if (accessToken) {
      const decodedToken: { UserInfo: { role: string } } =
        jwtDecode(accessToken);

      const role = decodedToken.UserInfo.role;

      if (role) {
        setRole(role);
      }
    }
  }, [accessToken]);

  const generatedProps = {
    role,
  };
  return <AccountView {...generatedProps} />;
};

export default Account;
