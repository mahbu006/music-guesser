import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { setNavigator } from "./src/navigationRef";
import HomeScreen from "./src/screens/HomeScreen";
import AuthenticationScreen from "./src/screens/AuthenticationScreen";
import ModeScreen from "./src/screens/ModeScreen";
import GenreScreen from "./src/screens/GenreScreen";
import TypeScreen from "./src/screens/TypeScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./src/reducers";
const navigator = createSwitchNavigator({
  authFlow: createStackNavigator({
    Authentication: AuthenticationScreen
  }),
  mainFlow: createBottomTabNavigator({
    Play: createStackNavigator({
      Home: HomeScreen,
      Mode: ModeScreen,
      Genre: GenreScreen,
      Type: TypeScreen
    })
  })
});

const App = createAppContainer(navigator);
export default () => {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <App
        ref={navigator => {
          setNavigator(navigator);
        }}
      />
    </Provider>
  );
};
