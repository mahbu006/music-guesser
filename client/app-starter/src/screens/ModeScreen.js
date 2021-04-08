import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";

const ModeScreen = props => {
  return (
    <View style={styles.screenContainer}>
      <AppButton 
        title="Easy" 
        size="sm"
        backgroundColor="#007bff" 
        onPress={() => props.navigation.navigate('Type')}/>
      <AppButton 
        title="Medium" 
        size="sm" 
        backgroundColor="#007bff" 
        onPress={() => props.navigation.navigate('Type')}/>
      <AppButton 
        title="Hard" 
        size="sm"
        backgroundColor="#007bff" 
        onPress={() => props.navigation.navigate('Type')}/>
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