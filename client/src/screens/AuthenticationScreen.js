import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { setUser } from "../actions";
import { connect } from "react-redux";
WebBrowser.dismissAuthSession();
const AuthenticationScreen = ({ navigation, setUser }) => {
  const handlePressButtonGoogle = async () => {
    try {
      let result = await WebBrowser.openAuthSessionAsync(
        "http://localhost:5000/auth/google"
      );
      let data;
      if (result.url) data = Linking.parse(result.url);
      console.log(data.queryParams.user);
      setUser(data.queryParams.user);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };
  const handlePressButtonSpotify = async () => {
    try {
      let result = await WebBrowser.openAuthSessionAsync(
        "http://localhost:5000/auth/spotify"
      );
      let data;
      if (result.url) data = Linking.parse(result.url);
      console.log(data.queryParams.user);
      setUser(data.queryParams.user);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };
  return (
    <View>
      <Text style={styles.text}>Authentication Page</Text>
      <TouchableOpacity style={styles.button} onPress={handlePressButtonGoogle}>
        <Text>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePressButtonSpotify}
      >
        <Text>Sign in with Spotify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 30
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, { setUser })(AuthenticationScreen);
