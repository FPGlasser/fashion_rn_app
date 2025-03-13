import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import SocialSignButton from "../SocialSignButton";
import { Href } from "expo-router";
import FormDivider from "../FormDivider";
import { PrimaryTextLink } from "@/components/ui";

const appleLogo = require("@/assets/images/logos/apple.png");
const googleLogo = require("@/assets/images/logos/google.png");
const facebookLogo = require("@/assets/images/logos/facebook.png");

type SocialSignFormProps = {
  title: string;
  label: string;
  href: Href;
};

const SocialSignForm = ({ title, label, href }: SocialSignFormProps) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <FormDivider sign="in" />
      <View style={styles.iconsButtonContainer}>
        <SocialSignButton iconUri={appleLogo} />
        <SocialSignButton iconUri={googleLogo} />
        <SocialSignButton iconUri={facebookLogo} />
      </View>
      <View style={styles.linkContainer}>
        <Text>{title}</Text>
        <PrimaryTextLink href={href} label={label} />
      </View>
    </View>
  );
};

export default SocialSignForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    gap: 32,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconsButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
  },

  linkContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
