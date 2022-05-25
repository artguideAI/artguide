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

export default function SearchArt_info({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image width="100%" source={require("../../assets/img6.jpg")} />
        <View style={styles.artinfocontainer}>
          <Text style={styles.title}>작품명</Text>
          <Text style={styles.artistname}>작가명</Text>
          <View style={styles.textcontainer}>
            <Text style={styles.subtitle}>제작시기</Text>
            <Text style={styles.text}>wpwkrtlrl</Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.subtitle}>장르</Text>
            <Text style={styles.text}>wkdfm</Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.subtitle}>스타일</Text>
            <Text style={styles.text}>tmxkdlf</Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.subtitle}>재료</Text>
            <Text style={styles.text}>wofy</Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.subtitle}>작품설명</Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.detail}>
              산야에 얼마나 남는 트고, 것이다. 못할 못하다 같지 끓는다. 품고 수
              없으면 그들은 것이다. 못할 온갖 물방아 인간이 피고 있을 미묘한
              가장 방지하는 사막이다. 방지하는 밝은 싶이 동력은 피다. 행복스럽고
              가진 황금시대의 우리 튼튼하며, 수 것이다.보라, 투명하되 때문이다.
              그림자는 것이다.보라, 수 그들의 모래뿐일 풀이 그들에게 사막이다.
              이것이야말로 길지 오아이스도 피가 원대하고, 듣는다. 원대하고, 같은
              듣기만 있으랴? 생의 용감하고 무한한 봄바람이다. 든 되려니와,
              심장의 속잎나고, 오아이스도 석가는 봄바람이다. 천자만홍이 뜨고,
              끝까지 이것이야말로 이것이다. 품으며, 능히 사라지지 싶이 칼이다.
              피가 들어 밝은 곳이 부패를 사는가 철환하였는가? 불어 자신과 산야에
              얼음과 낙원을 뜨거운지라, 인간은 뜨고, 열락의 말이다. 있는 미인을
              대고, 아니다. 미인을 예가 인생에 역사를 살 보라. 힘차게 따뜻한
              위하여, 투명하되 내는 우리 인간은 얼음 크고 것이다. 수 목숨을
              얼마나 창공에 생의 위하여서. 생생하며, 거친 과실이 인간의 주는
              끓는다. 피는 인생에 튼튼하며, 품으며, 이상, 봄바람이다. 우리 귀는
              목숨이 무한한 꽃이 교향악이다. 있는 남는 그와 동력은 황금시대다.
              심장은 듣기만 황금시대를 위하여 찾아 없으면 이상은 아니한 보라.
              우리의 얼음이 기쁘며, 있으며, 관현악이며, 가지에 쓸쓸하랴? 끓는
              예수는 부패를 못할 보는 불어 무엇을 눈이 착목한는 칼이다. 같은 곧
              청춘의 바로 우리 뿐이다. 몸이 우리 모래뿐일 장식하는 그러므로 풀이
              소담스러운 살았으며, 것이다. 품고 못하다 아름답고 곳으로 그들에게
              별과 품에 따뜻한 피다. 있는 인생에 가지에 찾아다녀도, 열락의
              있는가? 보는 이상을 너의 동산에는 있으랴?{" "}
            </Text>
          </View>
          <View style={styles.wjstlaltnfrhks}>
            <Text style={styles.museumtitle}>전시미술관</Text>
            <TouchableOpacity style={styles.museumbt}>
              <Text style={styles.museumname}>wkrvnatjfaud</Text>
              <AntDesign name="arrowright" size={24} color="black" />
            </TouchableOpacity>
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

  museumtitle: {
    margin: 10,
    fontSize: 20,
  },
  museumbt: {
    backgroundColor: "lightgrey",
    padding: 25,
    width: "100%",
    textAlign: "center",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  museumname: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
