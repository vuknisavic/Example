import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const MeditateScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Meditate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a29bfe",
    alignItems: "center",
    justifyContent: "center",
  },
});
