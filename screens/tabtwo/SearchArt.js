import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as ImagePicker from "expo-image-picker";

export default function SearchArt({ navigation }) {
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("C:/app-artguide/assets/artSearchBack.jpg")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.pop()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.imguploadbt}
          onPress={openImagePickerAsync}
        >
          <Feather name="upload" size={24} color="black" />
          <Text style={styles.text}>Image Upload</Text>
        </TouchableOpacity>
        <View style={styles.container2}>
          <Text style={styles.artHistoryTop}>History</Text>
          <View style={styles.container3}>
            <TouchableOpacity activeOpacity={0.8}>
              <ImageBackground
                source={require("C:/app-artguide/assets/img1.jpg")}
                style={styles.arthistory}
                imageStyle={styles.artHistoryImage}
              >
                <Text style={styles.artHistoryTitle}>title1</Text>
                <Text style={styles.artHistoryArtist}>artist1</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <ImageBackground
                source={require("C:/app-artguide/assets/img2.jpg")}
                style={styles.arthistory}
                imageStyle={styles.artHistoryImage}
              >
                <Text style={styles.artHistoryTitle}>title2</Text>
                <Text style={styles.artHistoryArtist}>artist2</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    marginBottom: -20,
    height: 100,
    width: "100%",
    borderRadius: 16,
    backgroundColor: "rgba(240, 240, 240, 0.48)",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  container3: {
    flex: 4,
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0)",
    margin: 10,
  },
  item: {
    height: 100,
    margin: 10,
    width: "30%",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  imguploadbt: {
    position: "absolute",
    padding: 20,
    width: 250,
    height: 100,
    top: "20%",
    left: "18%",
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  bgImage: { flex: 1, resizeMode: "cover", justifyContent: "center" },
  historyb: {
    justifyContent: "center",
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 60,
    flex: 1,
  },
  artHistoryTop: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 15,
  },
  arthistory: {
    width: 150,
    height: 200,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 10,
  },
  artHistoryImage: {
    borderRadius: 20,
  },
  artHistoryTitle: {
    fontSize: 18,
    color: "white",
  },
  artHistoryArtist: { fontSize: 16, color: "white" },
});
