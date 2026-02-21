import * as Yup from "yup";

export const registerSchema = Yup.object({
    fullName: Yup.string().required("full name is required")
    .min(3, "Full name must be at least 3 characters"),

    email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email."),

    password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/\d/, "Password must contain at least one number"),
    
    confirmPassword: Yup
    .string()
    .required("confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords do not match."),

    terms: Yup.boolean()
  .oneOf([true], "You must accept the terms & conditions"),

});