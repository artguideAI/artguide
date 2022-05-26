import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import SearchArt from "./screens/tabtwo/SearchArt";
import SearchArt_simiimage from "./screens/tabtwo/SearchArt_simiimage";
import SearchArt_info from "./screens/tabtwo/SearchArt_info";
import Recommend from "./screens/tabone/Recommend";
import MoreArtist from "./screens/tabone/MoreArtist";
import MoreGenre from "./screens/tabone/MoreGenre";
import SearchMuseum from "./screens/tabthree/SearchMuseum";
import MuseumInfo from "./screens/tabthree/MuseumInfo";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import camera from "./component/camera";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function RootNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="작품검색"
      barStyle={{ backgroundColor: "black" }}
      screenOptions={({ route }) => ({
        headerShown: false,
        activeColor: "White",
        inactiveColor: "gray",
      })}
    >
      <Tab.Screen
        name="추천"
        component={Recommendtab}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="random" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="작품검색"
        component={MainTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="미술관검색"
        component={MuseumTab}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="map-marker" size={24} color={color} />
          ),
        }}
      />
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
      <Stack.Screen
        name="SearchArt_simiimage"
        component={SearchArt_simiimage}
      />
      <Stack.Screen name="SearchArt_info" component={SearchArt_info} />
    </Stack.Navigator>
  );
}

function MuseumTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="SearchMuseum" component={SearchMuseum} />
      <Stack.Screen name="MuseumInfo" component={MuseumInfo} />
    </Stack.Navigator>
  );
}
