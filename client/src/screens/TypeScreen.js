import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";

const TypeScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <AppButton
        title="Single Player"
        size="sm"
        backgroundColor="#007bff"
        onPress={() => navigation.navigate("Genre", { type: "single" })}
      />
      <AppButton
        title="Multiplayer (coming soon)"
        size="sm"
        backgroundColor="#007bff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  }
});

export default TypeScreen;
