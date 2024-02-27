import { useEffect, useState } from "react";
import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";
import { useStore } from "../../store";
import HomeView from "./Home.view";

const Home = () => {
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
  return <HomeView {...generatedProps} />;
};

export default Home;
