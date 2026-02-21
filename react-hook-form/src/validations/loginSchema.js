import * as Yup from "yup";

export const loginSchema = Yup.object({
    email: Yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),

    password: Yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/\d/, "Password must contain at least one number"),
});