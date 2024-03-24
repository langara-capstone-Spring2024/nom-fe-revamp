import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { Image } from "../../types";
import { Dispatch, SetStateAction } from "react";

export type BasicForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type AdditionalForm = {
  imageNumber: number;
  restaurantName: string;
  category:
    | "American"
    | "Chinese"
    | "Indian"
    | "Italian"
    | "Japanese"
    | "Korean"
    | "Mexican"
    | "Thai"
    | "Others"
    | "";
  address: string;
  latitude: number;
  longitude: number;
};

export type BusinessForm = {
  license: string;
};

export interface MerchantRegistrationGeneratedProps {
  page: number;
  isErrorRegister: boolean;
  basicInitialValues: BasicForm;
  additionalInitialValues: AdditionalForm;
  businessInitialValues: BusinessForm;
  basicValidationSchema: Yup.ObjectSchema<BasicForm>;
  additionalValidationSchema: Yup.ObjectSchema<AdditionalForm>;
  businessValidationSchema: Yup.ObjectSchema<BusinessForm>;
  images: Image[];
  operatingTimes: {
    label: string;
    isClosed: boolean;
    isOpen: boolean;
    openingTime: Date;
    closingTime: Date;
  }[];
  setOperatingTimes: Dispatch<
    SetStateAction<
      {
        label: string;
        isClosed: boolean;
        isOpen: boolean;
        openingTime: Date;
        closingTime: Date;
      }[]
    >
  >;
  setImages: (images: Image[]) => void;
  handleSubmitBasic: (
    form: BasicForm,
    helpers: FormikHelpers<BasicForm>
  ) => void;
  handleSubmitAdditional: (
    form: AdditionalForm,
    helpers: FormikHelpers<AdditionalForm>
  ) => void;
  handleSubmitBusiness: (
    form: BusinessForm,
    helpers: FormikHelpers<BusinessForm>
  ) => void;
  handleSuccess: () => void;
}
