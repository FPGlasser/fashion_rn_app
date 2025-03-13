import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const SafeViewWrapper = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      {children}
      <StatusBar backgroundColor={theme.colors.background} />
    </SafeAreaView>
  );
};

export default SafeViewWrapper;
