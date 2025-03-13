import { TextInputProps } from "react-native-paper";

export type InputFieldWithValidation = {
  name: string;
  label?: string;
  errorMessage?: string;
  control: any;
} & Omit<TextInputProps, "mode">;
