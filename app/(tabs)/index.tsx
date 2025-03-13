import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";
import SafeViewWrapper from "@/components/layout/SafeViewWrapper";

const HomeScreen = () => {
  return (
    <SafeViewWrapper>
      <Button mode="contained">HomeScreen</Button>
    </SafeViewWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
