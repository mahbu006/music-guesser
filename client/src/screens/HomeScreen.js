import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import server from "../api/server";

const HomeScreen = ({ auth }) => {
  const getSpotify = async () => {
    try {
      const response = await server.get("/spotify/choices/pop");
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return <Text style={styles.text}>Home</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(mapStateToProps, {})(HomeScreen);
