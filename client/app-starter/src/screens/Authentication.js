import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import server from "../api/server";
WebBrowser.dismissAuthSession();
const AuthenticationScreen = ({ navigation }) => {
  const [result, setResult] = useState("");
  const handlePressButtonGoogle = async () => {
    let result = await WebBrowser.openAuthSessionAsync(
      "http://localhost:5000/auth/google",
      "http://localhost:5000/user"
    );
    setResult(result);
    /* await WebBrowser.maybeCompleteAuthSession(); */
  };
  const handlePressButtonSpotify = async () => {
    let result = await WebBrowser.openAuthSessionAsync(
      "http://localhost:5000/auth/spotify",
      "http://localhost:5000/user"
    );
    setResult(result);
    server
      .get("/user")
      .then(res => console.log(res))
      .catch(err => console.log(err));
    /* await WebBrowser.maybeCompleteAuthSession(); */
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
      <Text>{result && JSON.stringify(result)}</Text>
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

export default AuthenticationScreen;
