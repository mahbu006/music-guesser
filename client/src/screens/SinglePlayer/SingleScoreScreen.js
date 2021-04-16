import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../../components/Spacer";
import server from "../../api/server";
const SingleScoreScreen = ({ navigation }) => {
  const [highScore, setHighScore] = useState(0);
  const setAndGetScore = async () => {
    try {
      const score = await server.post("/single/score", {
        mode: navigation.getParam("mode"),
        value: navigation.getParam("value"),
        genre: navigation.getParam("genre")
      });
      setHighScore(score.data.score.value);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setAndGetScore();
  }, []);
  return (
    <SafeAreaView>
      <Spacer>
        <Text>Score: {navigation.getParam("value")}</Text>
        <Text>Your High Score: {highScore}</Text>
        <Spacer />
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default SingleScoreScreen;
