import { StyleSheet, Text, View, ViewProps, ViewStyle } from "react-native";
import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
} & ViewProps;

const Container = ({ children, style, ...rest }: ContainerProps) => {
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
