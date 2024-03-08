import { useEffect, useState } from "react";
import { GetMerchants } from "../../services/react-query/queries/user";
import ConsumerHomeView from "./ConsumerHome.view";

const ConsumerHome = () => {
  const {
    isError: isErrorOnMerchants,
    data: merchants = [],
    refetch: refetchMerchants,
  } = GetMerchants();

  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    console.log(merchants);
  }, [merchants]);

  const generatedProps = {
    keyword,
    setKeyword,
    merchants,
  };
  return <ConsumerHomeView {...generatedProps} />;
};

export default ConsumerHome;
