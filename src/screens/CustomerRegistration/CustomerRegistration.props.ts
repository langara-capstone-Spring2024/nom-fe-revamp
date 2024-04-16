import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type BasicForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export interface CustomerRegistrationGeneratedProps {
  basicInitialValues: BasicForm;
  basicValidationSchema: Yup.ObjectSchema<BasicForm>;

  handleSubmit: (form: BasicForm, helpers: FormikHelpers<BasicForm>) => void;
}
