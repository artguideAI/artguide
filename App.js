import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import SearchArt from "./screens/tabtwo/SearchArt";
import Recommend from "./screens/tabone/Recommend";
import MoreArtist from "./screens/tabone/MoreArtist";
import MoreGenre from "./screens/tabone/MoreGenre";
import SearchMuseum from "./screens/tabthree/SearchMuseum";
import { FontAwesome } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({ route }) => ({
        TabBarIcon: ({}) => {
          let iconName;

          if (route.name === "Main") {
            iconName = "search";
          } else if (route.name === "Recommend") {
            iconName = "random";
          } else if (route.name === "SearchMuseum") {
            iconName = "compass";
          }
          return <EvilIcons name={iconName} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "White",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Recommendtab" component={Recommendtab} />
      <Tab.Screen name="Main" component={SearchArt} />
      <Tab.Screen name="SearchMuseum" component={SearchMuseum} />
    </Tab.Navigator>
  );
}

function Recommendtab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Recommend" component={Recommend} />
      <Stack.Screen name="MoreArtist" component={MoreArtist} />
      <Stack.Screen name="MoreGenre" component={MoreGenre} />
    </Stack.Navigator>
  );
}
