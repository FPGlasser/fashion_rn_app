import { StyleSheet } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

type LabelProps = {
  label: string;
};

export const Label = ({ label }: LabelProps) => {
  return <Text>{label}</Text>;
};

const styles = StyleSheet.create({});
