import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
WebBrowser.dismissAuthSession();
const AuthenticationScreen = ({ navigation }) => {
  const [redirectData, setRedirectData] = useState(null);
  const handlePressButtonGoogle = async () => {
    try {
      let result = await WebBrowser.openAuthSessionAsync(
        "http://localhost:5000/auth/google"
      );
      let redirectData;
      if (result.url) redirectData = Linking.parse(result.url);
      setRedirectData(redirectData);
      console.log(redirectData);
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
      let redirectData;
      if (result.url) redirectData = Linking.parse(result.url);
      setRedirectData(redirectData);
      console.log(redirectData);
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

export default AuthenticationScreen;
