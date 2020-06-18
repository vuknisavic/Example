import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const SleepScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Sleep</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF8B73",
    alignItems: "center",
    justifyContent: "center",
  },
});
