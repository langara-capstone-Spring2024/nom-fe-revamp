import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type LoginForm = {
  email: string;
  password: string;
};

export interface LoginGeneratedProps {
  isErrorOnSignin: boolean;
  initialValues: LoginForm;
  validationSchema: Yup.ObjectSchema<LoginForm>;
  handleSubmit: (form: LoginForm, helpers: FormikHelpers<LoginForm>) => void;
}
