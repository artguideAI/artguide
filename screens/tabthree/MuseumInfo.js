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
import { AntDesign } from "@expo/vector-icons";

export default function MuseumInfo({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image width="100%" source={require("../../assets/museum.jpg")} />
        <View style={styles.artinfocontainer}>
          <Text style={styles.title}>미술관명</Text>
          <View style={styles.textcontainer}>
            <Text style={styles.subtitle}>주소</Text>
            <Text style={styles.text}>wnth</Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.subtitle}>영업시간</Text>
            <Text style={styles.text}>duddjqtlrks</Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.subtitle}>연락처</Text>
            <Text style={styles.text}>dusfkrcj</Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.subtitle}>국가</Text>
            <Text style={styles.text}>rnrrk</Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.subtitle}>웹사이트</Text>
            <Text style={styles.text}>dnpqtkdlxm</Text>
          </View>
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
  artinfocontainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 10,
  },
  textcontainer: {
    flexDirection: "row",
    width: "auto",
    justifyContent: "space-between",

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
  selectedartwork: {
    width: "100%",
  },
  subtitle: {
    fontSize: 20,
  },
  artistname: {
    textAlign: "right",
    margin: 10,
    fontSize: 15,
  },

  detail: {
    fontSize: 14,
    lineHeight: 30,
  },
});
