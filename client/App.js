import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AuthenticationScreen from "./src/screens/AuthenticationScreen";
import ModeScreen from "./src/screens/ModeScreen";
import GenreScreen from "./src/screens/GenreScreen";
import TypeScreen from "./src/screens/TypeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Authentication: AuthenticationScreen,
    Mode: ModeScreen,
    Genre: GenreScreen,
    Type: TypeScreen
  },
  {
    initialRouteName: "Authentication",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
