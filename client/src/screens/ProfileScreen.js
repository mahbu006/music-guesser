import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { connect } from "react-redux";
import { logout } from "../actions";
const ProfileScreen = ({ logout }) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Spacer>
        <Button title="Logout" onPress={() => logout()}></Button>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, { logout })(ProfileScreen);
