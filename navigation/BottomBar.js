import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SearchArt from "../screens/tabtwo/SearchArt";
import Recommend from "../screens/tabone/Recommend";
import SearchMuseum from "../screens/tabthree/SearchMuseum";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={SearchArt} />
      <Tab.Screen name="Recommend" component={Recommend} />
      <Tab.Screen name="SearchMuseum" component={SearchMuseum} />
    </Tab.Navigator>
  );
}
