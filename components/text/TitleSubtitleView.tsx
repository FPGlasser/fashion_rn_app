import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

type TextSectionProps = {
  title: string;
  description: string;
};

const TitleSubtitleView = ({ title, description }: TextSectionProps) => {
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.text}>
        {title}
      </Text>
      <Text variant="bodyMedium" style={styles.text}>
        {description}
      </Text>
    </View>
  );
};

export default TitleSubtitleView;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    gap: 16,
  },

  text: {
    textAlign: "center",
  },
});
