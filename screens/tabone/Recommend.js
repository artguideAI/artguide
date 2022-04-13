import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Recommend({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <ImageBackground
          source={require("C:/app-artguide/assets/img1.jpg")}
          style={styles.backgroundImage}
        >
          <Text style={styles.mainImgname}>작품이름</Text>
        </ImageBackground>

        <View style={styles.randomSubject}>
          <View style={styles.randomSubjectTitle}>
            <Text style={{ fontSize: 20 }}>ArtistName</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("MoreArtist")}
              style={{ backgroundColor: "blue" }}
            >
              <Text style={{ fontSize: 20, color: "#fff" }}>더보기</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.randomContentBox}
          >
            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>1</Text>
            </View>
            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>2</Text>
            </View>
            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>3</Text>
            </View>
            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>4</Text>
            </View>
            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>5</Text>
            </View>
            {/* 최대 10개만나오게>?*/}
          </ScrollView>
        </View>

        <View style={styles.randomSubject}>
          <View style={styles.randomSubjectTitle}>
            <Text style={{ fontSize: 20 }}>GenreName</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("MoreGenre")}
              style={{ backgroundColor: "blue" }}
            >
              <Text style={{ fontSize: 20, color: "#fff" }}>더보기</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.randomContentBox}
          >
            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>1</Text>
            </View>

            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>2</Text>
            </View>
            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>3</Text>
            </View>
            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>4</Text>
            </View>
            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>5</Text>
            </View>
            {/* 최대 10개만나오게>?*/}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  backgroundImage: {
    flex: 1,
    height: 700,
    width: "100%",
  },
  randomItem: {},
  randomSubject: {
    margin: 10,
  },
  mainImgname: {
    fontSize: 30,
    color: "white",
    alignItems: "flex-end",
  },
  randomContent: {
    width: 100,
    height: 100,
    backgroundColor: "grey",
    margin: 10,
  },
  randomContentBox: {
    flexDirection: "row",
  },
  randomCName: {},
  randomSubjectTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scrollView: {},
  backIcon: {
    marginLeft: 20,
    marginTop: 60,
    flex: 1,
  },
});
