import {
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MoreArtist({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.textbox}>
            <Text style={styles.title}>작가 이름</Text>
            <Text style={styles.counto}>?? Objects</Text>
          </View>
        </View>

        <View style={styles.content}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.contentbox}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Image
              style={styles.Images}
              source={require("../../assets/img1.jpg")}
            />
            <Text style={styles.contentname}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.contentbox}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Image
              style={styles.Images}
              source={require("../../assets/img1.jpg")}
            />
            <Text style={styles.contentname}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.contentbox}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Image
              style={styles.Images}
              source={require("../../assets/img1.jpg")}
            />
            <Text style={styles.contentname}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.contentbox}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Image
              style={styles.Images}
              source={require("../../assets/img1.jpg")}
            />
            <Text style={styles.contentname}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.contentbox}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Image
              style={styles.Images}
              source={require("../../assets/img1.jpg")}
            />
            <Text style={styles.contentname}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.contentbox}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Image
              style={styles.Images}
              source={require("../../assets/img1.jpg")}
            />
            <Text style={styles.contentname}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.contentbox}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Image
              style={styles.Images}
              source={require("../../assets/img1.jpg")}
            />
            <Text style={styles.contentname}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.contentbox}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Image
              style={styles.Images}
              source={require("../../assets/img1.jpg")}
            />
            <Text style={styles.contentname}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.contentbox}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Image
              style={styles.Images}
              source={require("../../assets/img1.jpg")}
            />
            <Text style={styles.contentname}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.contentbox}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Image
              style={styles.Images}
              source={require("../../assets/img1.jpg")}
            />
            <Text style={styles.contentname}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.contentbox}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Image
              style={styles.Images}
              source={require("../../assets/img1.jpg")}
            />
            <Text style={styles.contentname}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.contentbox}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Image
              style={styles.Images}
              source={require("../../assets/img1.jpg")}
            />
            <Text style={styles.contentname}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.contentbox}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Image
              style={styles.Images}
              source={require("../../assets/img1.jpg")}
            />
            <Text style={styles.contentname}>5</Text>
          </TouchableOpacity>
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
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  header: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {},
  counto: {
    flex: 1,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  contentbox: {},
  contentname: {},
  backIcon: {
    flex: 3,
  },
  Images: {
    width: 150,
    height: 150,
    margin: 5,
  },
  textbox: {},
  backIcon: {
    marginLeft: 20,
  },
});
