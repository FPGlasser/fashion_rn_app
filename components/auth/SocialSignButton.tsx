import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MD3Colors, Button } from "react-native-paper";
import { Image } from "expo-image";

type SocialSignButtonProps = {
  iconUri: any;
};

const SocialSignButton = ({ iconUri }: SocialSignButtonProps) => {
  return (
    <Button style={styles.container}>
      <Image
        source={iconUri}
        style={styles.image}
        contentFit="fill"
        transition={1000}
      />
    </Button>
  );
};

export default SocialSignButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: MD3Colors.neutral90,
    borderRadius: 100,
    padding: 5,
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 24,
    height: 24,
  },
});
