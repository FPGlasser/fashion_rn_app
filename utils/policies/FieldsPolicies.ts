import { z } from "zod";

export const EmailPolicy = z
  .string({ required_error: "Email is required" })
  .email({ message: "Please enter a valid email" })
  .max(64, { message: "Please enter a valid email" });
export const PasswordPolicy = z
  .string({ required_error: "Password is required" })
  .min(6, { message: "Password must be at least 6 characters." })
  .max(64, { message: "Password cannot exceed 64 characters." });
