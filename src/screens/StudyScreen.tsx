import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const StudyScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Study</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF66E",
    alignItems: "center",
    justifyContent: "center",
  },
});
