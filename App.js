import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import SearchArt from "./screens/tabtwo/SearchArt";
import Recommend from "./screens/tabone/Recommend";
import MoreArtist from "./screens/tabone/MoreArtist";
import MoreGenre from "./screens/tabone/MoreGenre";
import SearchMuseum from "./screens/tabthree/SearchMuseum";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import camera from "./component/camera";

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
        headerShown: false,
        tabBarActiveTintColor: "White",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Recommendtab" component={Recommendtab} options={{ tabBarIcon: () => ( <FontAwesome name="random" size={24} color="black" />),}}/>
      <Tab.Screen name="MainTab" component={MainTab} options={{ tabBarIcon: () => ( <Ionicons name="search" size={24} color="black" />),}}/>
      <Tab.Screen name="SearchMuseum" component={SearchMuseum} options={{ tabBarIcon: () => ( <FontAwesome name="map-marker" size={24} color="black" />),}}/>
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
function MainTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Main" component={SearchArt} />
      <Stack.Screen name="camera" component={camera} />
    </Stack.Navigator>
  );
}
