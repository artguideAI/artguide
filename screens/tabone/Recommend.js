import {
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Dimensions
} from "react-native";
import React from "react";
import { CurrentRenderContext, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";



export default function Recommend({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>          
        <Image
          source={require("../../assets/img1.jpg")}
          style={styles.backgroundImage}
        >
        </Image>
        <Text style={styles.mainImgname}>작품이름</Text>
        <View style={styles.randomSubject}>
          <View style={styles.randomSubjectTitle}>
            <Text style={{ fontSize: 20 }}>ArtistName</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("MoreArtist")}
              style={styles.morebuttoncontainer}
            >
              <Text style={styles.morebuttontext}>더보기</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.randomContentBox}
          >
            <View style={styles.rdctsctn}>
              <View style={styles.randomContent}/>
              <Text style={styles.randomCName}>1</Text>
            </View>
            <View style={styles.rdctsctn}>
              <View style={styles.randomContent}/>
              <Text style={styles.randomCName}>1</Text>
            </View>
            <View style={styles.rdctsctn}>
              <View style={styles.randomContent}/>
              <Text style={styles.randomCName}>1</Text>
            </View>
            <View style={styles.rdctsctn}>
              <View style={styles.randomContent}/>
              <Text style={styles.randomCName}>1</Text>
            </View>
            <View style={styles.rdctsctn}>
              <View style={styles.randomContent}/>
              <Text style={styles.randomCName}>1</Text>
            </View>
            {/* 최대 10개만나오게>?*/}
          </ScrollView>
        </View>

        <View style={styles.randomSubject}>
          <View style={styles.randomSubjectTitle}>
            <Text style={{ fontSize: 20 }}>GenreName</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("MoreGenre")}
              style={styles.morebuttoncontainer}
            >
              <Text style={styles.morebuttontext}>더보기</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.randomContentBox}
          >
            <View style={styles.rdctsctn}>
              <View style={styles.randomContent}/>
              <Text style={styles.randomCName}>1</Text>
            </View>

            <View style={styles.rdctsctn}>
              <View style={styles.randomContent}/>
              <Text style={styles.randomCName}>1</Text>
            </View>
            <View style={styles.rdctsctn}>
              <View style={styles.randomContent}/>
              <Text style={styles.randomCName}>1</Text>
            </View>
            <View style={styles.rdctsctn}>
              <View style={styles.randomContent}/>
              <Text style={styles.randomCName}>1</Text>
            </View>
            <View style={styles.rdctsctn}>
              <View style={styles.randomContent}/>
              <Text style={styles.randomCName}>1</Text>
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
    width: "${Dimensions.get('window').width * 0.9}px",
    height:"100%"
  },
  randomItem: {},
  randomSubject: {
    margin: 10,
  },
  mainImgname: {
    fontSize: 30,
    color: "black",
    alignItems: "flex-end",
    textAlign: "center",
  },
  randomContent: {
    width: 100,
    height: 100,
    backgroundColor: "grey",
    margin: 10,
  },
  randomContentBox: {
    flexDirection: "row",
    textAlign: "center",
  },
  rdctsctn: {
    flexDirection: "column"
  },
  randomCName: {
    textAlign: "center",
  },
  randomSubjectTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scrollView: {
    flex: 1,
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 60,
    flex: 1,
  },
  morebuttontext: {
    fontSize: 18,
    color:"grey",
  },
  morebuttoncontainer: {},
});
