import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { ButtonProps, Button as PaperButton } from "react-native-paper";

type CustomButtonProps = {
  label: string;
} & Omit<ButtonProps, "children">;

export const Button = ({ label, style, ...props }: CustomButtonProps) => {
  return (
    <PaperButton style={[styles.button, style]} {...props}>
      {label}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: "center",
  },
});
