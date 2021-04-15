import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { tryLocalSignin } from "../actions";
import { connect } from "react-redux";
const ResolveAuthScreen = ({ tryLocalSignin }) => {
  useEffect(() => {
    tryLocalSignin();
  });
  return <Text></Text>; //return loading circle
};

const styles = StyleSheet.create({});
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, {
  tryLocalSignin
})(ResolveAuthScreen);
