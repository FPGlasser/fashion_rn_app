import { StyleSheet, View } from "react-native";
import React, { ReactNode } from "react";

import SafeViewWrapper from "./SafeViewWrapper";
import { useTheme } from "react-native-paper";

const ScreenViewWrapper = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  return (
    <SafeViewWrapper>
      <View style={styles.screen}>{children}</View>
    </SafeViewWrapper>
  );
};

export default ScreenViewWrapper;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
});
