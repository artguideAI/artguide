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

export default function SearchArt_info({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.useruploadimage}>
          <Text style={styles.text}>선택한 이미지</Text>
        </View>
        <View style={styles.artinfocontainer}>
          <Text style={styles.title}>작품명</Text>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>제작시기</Text>
            <Text style={styles.text}>wpwkrtlrl</Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>장르</Text>
            <Text style={styles.text}>wkdfm</Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>스타일</Text>
            <Text style={styles.text}>tmxkdlf</Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>재료</Text>
            <Text style={styles.text}>wofy</Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>작품설명</Text>
            <Text style={styles.text}>wkrvnatjfaud</Text>
          </View>
        </View>
        <View style={styles.wjstlaltnfrhks}>
          <Text style={styles.text}>전시미술관</Text>
          <TouchableOpacity>
            <Text style={styles.text}>wkrvnatjfaud</Text>
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
  artinfocontainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textcontainer: {
    flexDirection: "row",
    textAlign: "center",
    margin: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  wjstlaltnfrhks: {
    alignItems: "center",
  },
});
