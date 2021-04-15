import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

const HomeScreen = ({ auth }) => {
  return <Text style={styles.text}>Home</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

HomeScreen.navigationOptions = {
  title: "Tracks"
};
const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(mapStateToProps, {})(HomeScreen);
