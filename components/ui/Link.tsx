import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link as ExpoLink, Href } from "expo-router";
import { useTheme } from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";

type LinkProps = {
  href: Href;
  label: string;
  textAlign?: "auto" | "center" | "justify" | "left" | "right";
};

export const PrimaryTextLink = ({ href, label, textAlign }: LinkProps) => {
  const theme = useTheme();
  return (
    <ExpoLink
      href={href}
      style={[
        styles.link,
        { color: theme.colors.primary, textAlign: textAlign },
      ]}
    >
      {label}
    </ExpoLink>
  );
};

export const SecondaryTextLink = ({ href, label, textAlign }: LinkProps) => {
  const theme = useTheme();
  return (
    <ExpoLink
      href={href}
      style={[
        styles.link,
        { color: theme.colors.primary, textAlign: textAlign },
      ]}
    >
      {label}
    </ExpoLink>
  );
};
export const TertiaryTextLink = ({ href, label, textAlign }: LinkProps) => {
  const theme = useTheme();
  return (
    <ExpoLink
      href={href}
      style={[
        styles.link,
        { color: theme.colors.primary, textAlign: textAlign },
      ]}
    >
      {label}
    </ExpoLink>
  );
};

export const SurfaceTextLink = ({ href, label, textAlign }: LinkProps) => {
  const theme = useTheme();
  return (
    <ExpoLink
      href={href}
      style={[
        styles.link,
        { color: theme.colors.primary, textAlign: textAlign },
      ]}
    >
      {label}
    </ExpoLink>
  );
};

const styles = StyleSheet.create({
  link: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
