import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { connect } from "react-redux";
import server from "../api/server";
import Spacer from "../components/Spacer";
const HomeScreen = ({ auth, navigation }) => {
  const getSpotify = async () => {
    try {
      const response = await server.get("/spotify/choices/pop");
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <Text style={styles.text}>Home</Text>
      <Spacer>
        <Button
          title="Play"
          type="solid"
          raised={true}
          icon={{
            name: "arrow-right",
            size: 15,
            color: "white"
          }}
          onPress={() => navigation.navigate("Type")}
        />
      </Spacer>
    </React.Fragment>
  );
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
