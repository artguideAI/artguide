import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as ImagePicker from "expo-image-picker";

export default function SearchArt_simiimage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.useruploadimage}>
          <Text style={styles.text}>업로드한 이미지</Text>
        </View>
        <View style={styles.simiimagescontainer}>
          <Text style={styles.text}>유사한 이미지 N개를 찾았습니다.</Text>
          <View style={styles.simiimages}>
            <View style={styles.simiimage}></View>
            <View style={styles.simiimage}></View>
            <View style={styles.simiimage}></View>
            <View style={styles.simiimage}></View>
            <View style={styles.simiimage}></View>
          </View>
        </View>
        <View style={styles.bingcontainer}>
          <Text style={{ textAlign: "center" }}>다른 작품을 찾으시나요?</Text>
          <TouchableOpacity>
            <Text style={{ textAlign: "center" }}>검색으로 이동</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  useruploadimage: {
    width: "100%",
    height: 300,
    backgroundColor: "grey",
  },
  text: {},
  simiimagescontainer: {},
  simiimages: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  simiimage: {
    backgroundColor: "grey",
    width: 70,
    height: 70,
    margin: 10,
  },
  bingcontainer: {
    backgroundColor: "grey",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: 30,
    borderRadius: 10,
    height: 50,
    textAlign: "center",
  },
});
