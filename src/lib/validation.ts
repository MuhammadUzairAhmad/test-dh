import * as Yup from "yup";

export const loginInitialValues = {
  email: "",
  password: "",
  remember: false,
};

export const loginValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Min 8 chars").required("Required"),
  remember: Yup.boolean(),
});

export const forgetPasswordInitialValues = {
  email: "",
};

export const forgetPasswordValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
});

export const resetPasswordInitialValues = {
  password: "",
  confirmPassword: "",
};

export const resetPasswordValidationSchema = Yup.object({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Must be at least 8 characters")
    .matches(/[A-Z]/, "Must include at least one uppercase letter")
    .matches(/[0-9]/, "Must include at least one number")
    .matches(/[^a-zA-Z0-9]/, "Must include at least one symbol"),

  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
