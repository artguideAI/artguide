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

export default function SearchArt_simiimage({ navigation }) {
  let count = 5;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.useruploadimage}>
          <Text style={styles.text}>업로드한 이미지</Text>
        </View>
        <Text style={styles.text}>유사한 이미지 {count}개를 찾았습니다.</Text>
        <View style={styles.simiimagescontainer}>
          <View style={styles.simiimages}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SearchArt_info")}
            >
              <Image
                style={styles.simiimage}
                source={require("../../assets/img5.jpg")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.simiimage}
                source={require("../../assets/img1.jpg")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.simiimage}
                source={require("../../assets/img2.jpg")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.simiimage}
                source={require("../../assets/img3.jpg")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.simiimage}
                source={require("../../assets/img4.jpg")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bingcontainer}>
          <Text style={styles.bingbttitle}>다른 작품을 찾으시나요?</Text>
          <TouchableOpacity style={styles.bingbutton}>
            <Image
              style={styles.binglogo}
              source={require("../../assets/binglogo.jpg")}
            />
            <Text style={styles.bingbttext}>검색으로 이동</Text>
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
  simiimagescontainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "auto",
    margin: 10,
    flexWrap: "wrap",
  },
  simiimages: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  simiimage: {
    backgroundColor: "grey",
    height: 150,
    width: 150,
    margin: 10,
  },
  bingcontainer: {
    backgroundColor: "lightgrey",
    flexDirection: "column",
    justifyContent: "space-evenly",
    margin: 10,
    borderRadius: 10,
    width: "auto",
    height: 130,
    padding: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  bingbttitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  bingbutton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bingbttext: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  binglogo: {
    height: 20,
    width: 50,
  },
});
