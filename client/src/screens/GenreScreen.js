import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import AppButton from "../components/AppButton";
const GenreScreen = props => {
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
        onPress={() => props.navigation.navigate("Mode")}
      />
      <AppButton
        title="Pop"
        size="sm"
        backgroundColor="#007bff"
        onPress={() => props.navigation.navigate("Mode")}
      />
      <AppButton
        title="R&B"
        size="sm"
        backgroundColor="#007bff"
        onPress={() => props.navigation.navigate("Mode")}
      />
      <AppButton title="Country" size="sm" backgroundColor="#007bff" />
      <AppButton title="Electronic" size="sm" backgroundColor="#007bff" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default GenreScreen;
