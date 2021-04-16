import React, { useState, useEffect } from "react";
import { ListItem, Card, Image } from "react-native-elements";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { SafeAreaView, NavigationEvents } from "react-navigation";
import Spacer from "../../components/Spacer";
import server from "../../api/server";
const SinglePlayScreen = ({ navigation }) => {
  const [songs, setSongs] = useState([]);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(true);
  const type = navigation.getParam("type");
  const genre = navigation.getParam("genre");
  const mode = navigation.getParam("mode");
  const getSpotify = async () => {
    try {
      const response = await server.get(`/spotify/choices/${genre}`);
      setSongs(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSpotify();
    return () => {};
  }, [score, correct]);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer />
      <Text>Score: {score}</Text>
      <FlatList
        data={songs}
        keyExtractor={item => item.index.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                if (item.chosen) setScore(score + 1);
                else
                  navigation.navigate("SingleScore", {
                    value: score,
                    genre: navigation.getParam("genre"),
                    mode: navigation.getParam("mode")
                  });
              }}
            >
              <Card
                containerStyle={{ padding: 0 }}
                style={styles.boxWithShadow}
              >
                <ListItem.Content>
                  <Image
                    source={{ uri: item.album.image }}
                    style={{ width: 75, height: 75 }}
                  />
                  <ListItem.Content>
                    <ListItem.Title>
                      {item.song.name} + {`${item.chosen}`}
                    </ListItem.Title>
                  </ListItem.Content>
                </ListItem.Content>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  }
});
export default SinglePlayScreen;
