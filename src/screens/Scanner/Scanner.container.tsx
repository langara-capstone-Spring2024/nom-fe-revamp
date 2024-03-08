import NavigationService from "../../navigation/NavigationService";
import ScannerView from "./Scanner.view";

const Scanner = () => {
  const handleChange = (result: string) => {
    return true;
  };

  const handleClose = () => {
    NavigationService.navigate("MerchantHome");
  };

  const handleSuccess = () => {
    NavigationService.navigate("MerchantHome");
  };

  const generatedProps = {
    handleChange,
    handleClose,
    handleSuccess,
  };
  return <ScannerView {...generatedProps} />;
};

export default Scanner;
