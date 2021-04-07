import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AuthenticationScreen from "./src/screens/Authentication";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Authentication: AuthenticationScreen
  },
  {
    initialRouteName: "Authentication",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
