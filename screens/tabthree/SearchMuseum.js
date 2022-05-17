import * as React from "react";
import { useState, useEffect } from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { getLocation } from "react-native-element/Library/react-native-element-core/API/ENativeSystemApi";

export default function SearchMuseum() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [initialRegion, setInitialRegion] = useState({
    latitude: 35.91395373474155,
    longitude: 127.73829440215488,
    latitudeDelta: 5,
    longitudeDelta: 5,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const getLocation = () => {};

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          <View style={styles.consearchbar}>
            <TextInput style={styles.SearchB} placeholder="위치"></TextInput>
            <TextInput style={styles.SearchB} placeholder="검색어"></TextInput>
          </View>

          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.containermyloca}>
              <Ionicons name="locate-outline" size="30"></Ionicons>
            </View>
          </TouchableOpacity>

          <View style={styles.historybar}></View>
        </MapView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {},
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  consearchbar: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
  map: {
    display: "flex",
    flexDirection: "column",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  SearchB: {
    backgroundColor: "white",
    marginTop: 20,
    width: 160,
    height: 45,
    margin: 10,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1.5,
  },
  searchbutton: {},
  historybar: {
    height: "50%",
    width: "100%",
    borderRadius: 16,
    backgroundColor: "white",
    position: "absolute",
    bottom: -10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },

  containermyloca: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
