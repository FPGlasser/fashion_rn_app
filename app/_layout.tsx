import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import * as React from "react";
import { MD3LightTheme, MD3DarkTheme, PaperProvider } from "react-native-paper";
import CustomTheme from "@/constants/material-theme.json";
import { useColorScheme } from "react-native";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import SafeViewWrapper from "@/components/layout/SafeViewWrapper";

const theme = {
  ...CustomTheme,
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: theme.schemes.dark }
      : { ...MD3LightTheme, colors: theme.schemes.light };

  useEffect(() => {
    if (paperTheme) {
      SplashScreen.hideAsync();
    }
  }, [paperTheme]);

  if (!paperTheme) {
    return null;
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <PaperProvider theme={paperTheme}>
        <Stack screenOptions={{}}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
