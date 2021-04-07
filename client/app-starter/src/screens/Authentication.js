import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const AuthenticationScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Authentication PAge</Text>
            <TouchableOpacity
                style={styles.button}
            >
                <Text>Sign in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
            >
                <Text>Sign in with Spotify</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
            >
                <Text>Sign in with Apple</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 30
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default AuthenticationScreen;
