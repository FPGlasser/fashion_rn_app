import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";

type FormDividerProps = {
  sign: "in" | "up";
};

const FormDivider = ({ sign }: FormDividerProps) => {
  return (
    <View style={styles.container}>
      <Divider bold style={styles.divider} />
      <Text>Or Sign {sign} With</Text>
      <Divider bold style={styles.divider} />
    </View>
  );
};

export default FormDivider;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 64,
    gap: 8,
  },

  divider: {
    flex: 1,
  },
});
