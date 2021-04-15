import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { connect } from "react-redux";
import { setUserName } from "../actions";
const ChooseUserNameScreen = ({ error, setUserName }) => {
  const [name, setName] = useState("");
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer />
      <Text h1 style={{ fontSize: 40 }}>
        Choose a User Name
      </Text>
      <Spacer />
      <Input
        placeholder="Username..."
        leftIcon={<Icon name="user" size={22} color="black" />}
        onChangeText={setName}
        autoCapitalize="none"
      />
      <Text h5 style={{ color: "red" }}>
        {error !== undefined ? error.usernameError : ""}
      </Text>
      <Spacer>
        <Button title="Choose Username" onPress={() => setUserName(name)} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
const mapStateToProps = state => {
  return { error: state.error };
};
export default connect(mapStateToProps, { setUserName })(ChooseUserNameScreen);
