import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Camera } from "expo-camera";
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
        source={require("../../assets/artSearchBack.jpg")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("SearchArt_simiimage")}
        >
          <View style={styles.dlatl}>
            <Text>임시</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.imgcamcontainer} color="blue">
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.imguploadbt}
            onPress={openImagePickerAsync}
          >
            <Feather name="upload" size={24} color="black" />
            <Text style={styles.text}>Album</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("camera")}
            style={styles.imguploadbt}
          >
            <Feather name="camera" size={24} color="black" />
            <Text style={styles.text}>Camera</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <Text style={styles.artHistoryTop}>History</Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.container3}
          >
            <TouchableOpacity activeOpacity={0.8}>
              <ImageBackground
                source={require("../../assets/img1.jpg")}
                style={styles.arthistory}
                imageStyle={styles.artHistoryImage}
              >
                <TouchableOpacity style={styles.deleteh}>
                  <View>
                    <AntDesign name="closecircle" size={20} color="black" />
                  </View>
                </TouchableOpacity>
                <Text style={styles.artHistoryTitle}>title1</Text>
                <Text style={styles.artHistoryArtist}>artist1</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <ImageBackground
                source={require("../../assets/img2.jpg")}
                style={styles.arthistory}
                imageStyle={styles.artHistoryImage}
              >
                <TouchableOpacity style={styles.deleteh}>
                  <View>
                    <AntDesign name="closecircle" size={20} color="black" />
                  </View>
                </TouchableOpacity>
                <Text style={styles.artHistoryTitle}>title2</Text>
                <Text style={styles.artHistoryArtist}>artist2</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <ImageBackground
                source={require("../../assets/img3.jpg")}
                style={styles.arthistory}
                imageStyle={styles.artHistoryImage}
              >
                <TouchableOpacity style={styles.deleteh}>
                  <View>
                    <AntDesign name="closecircle" size={20} color="black" />
                  </View>
                </TouchableOpacity>
                <Text style={styles.artHistoryTitle}>title1</Text>
                <Text style={styles.artHistoryArtist}>artist1</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <ImageBackground
                source={require("../../assets/img4.jpg")}
                style={styles.arthistory}
                imageStyle={styles.artHistoryImage}
              >
                <TouchableOpacity style={styles.deleteh}>
                  <View>
                    <AntDesign name="closecircle" size={20} color="black" />
                  </View>
                </TouchableOpacity>
                <Text style={styles.artHistoryTitle}>title2</Text>
                <Text style={styles.artHistoryArtist}>artist2</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <ImageBackground
                source={require("../../assets/img5.jpg")}
                style={styles.arthistory}
                imageStyle={styles.artHistoryImage}
              >
                <TouchableOpacity style={styles.deleteh}>
                  <View>
                    <AntDesign name="closecircle" size={20} color="black" />
                  </View>
                </TouchableOpacity>
                <Text style={styles.artHistoryTitle}>title1</Text>
                <Text style={styles.artHistoryArtist}>artist1</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <ImageBackground
                source={require("../../assets/img6.jpg")}
                style={styles.arthistory}
                imageStyle={styles.artHistoryImage}
              >
                <TouchableOpacity style={styles.deleteh}>
                  <View>
                    <AntDesign name="closecircle" size={20} color="black" />
                  </View>
                </TouchableOpacity>
                <Text style={styles.artHistoryTitle}>title2</Text>
                <Text style={styles.artHistoryArtist}>artist2</Text>
              </ImageBackground>
            </TouchableOpacity>
          </ScrollView>
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
    height: "50%",
    width: "100%",
    borderRadius: 16,
    backgroundColor: "rgba(240, 240, 240, 0.48)",
    position: "absolute",
    bottom: -50,
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
    position: "relative",
    padding: 20,
    width: 100,
    height: 100,
    top: "20%",
    left: "18%",
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
  },
  imgcamcontainer: {
    flexDirection: "row",
    position: "absolute",
    top: "15%",
    left: "20%",
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
  dlatl: {
    backgroundColor: "grey",
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  deleteh: {},
});
