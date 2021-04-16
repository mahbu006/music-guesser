import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";

const ModeScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <AppButton
        title="Easy"
        size="sm"
        backgroundColor="#007bff"
        onPress={() =>
          navigation.navigate("SinglePlay", {
            type: navigation.getParam("type"),
            genre: navigation.getParam("genre"),
            mode: "easy"
          })
        }
      />
      <AppButton
        title="Medium"
        size="sm"
        backgroundColor="#007bff"
        onPress={() =>
          navigation.navigate("SinglePlay", {
            type: navigation.getParam("type"),
            genre: navigation.getParam("genre"),
            mode: "medium"
          })
        }
      />
      <AppButton
        title="Hard"
        size="sm"
        backgroundColor="#007bff"
        onPress={() =>
          navigation.navigate("SinglePlay", {
            type: navigation.getParam("type"),
            genre: navigation.getParam("genre"),
            mode: "hard"
          })
        }
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

export default ModeScreen;
