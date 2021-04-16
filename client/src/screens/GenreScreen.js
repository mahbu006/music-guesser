import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import AppButton from "../components/AppButton";
const GenreScreen = ({ navigation }) => {
  return (
    /* 
    <RNPickerSelect
      onValueChange={() => props.navigation.navigate("Mode")}
      items={[
        { label: "Pop", value: "pop" },
        { label: "Rap", value: "rap" },
        { label: "R&B", value: "r&b" },
        { label: "Country", value: "country" },
        { label: "Electronic", value: "edm" }
      ]}
      
    /> */
    <View style={styles.screenContainer}>
      <AppButton
        title="Hip Hop"
        size="sm"
        backgroundColor="#007bff"
        onPress={() =>
          navigation.navigate("Mode", {
            type: navigation.getParam("type"),
            genre: "rap"
          })
        }
      />
      <AppButton
        title="Pop"
        size="sm"
        backgroundColor="#007bff"
        onPress={() =>
          navigation.navigate("Mode", {
            type: navigation.getParam("type"),
            genre: "pop"
          })
        }
      />
      <AppButton
        title="R&B"
        size="sm"
        backgroundColor="#007bff"
        onPress={() =>
          navigation.navigate("Mode", {
            type: navigation.getParam("type"),
            genre: "r-n-b"
          })
        }
      />
      <AppButton
        title="Country"
        size="sm"
        backgroundColor="#007bff"
        onPress={() =>
          navigation.navigate("Mode", {
            type: navigation.getParam("type"),
            genre: "country"
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default GenreScreen;
