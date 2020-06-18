import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const TrainingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Training</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AEFF79",
    alignItems: "center",
    justifyContent: "center",
  },
});
