import { Merchant } from "../../types";

export interface ConsumerHomeGeneratedProps {
  keyword: string;
  setKeyword: (keyword: string) => void;
  merchants: Merchant[];
}
