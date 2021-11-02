import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ContactUS from "./src/ContactUS";
import HomeScreen from "./src/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Contact: ContactUS,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
