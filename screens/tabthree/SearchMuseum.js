import * as React from "react";
import { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Dimensions, SafeAreaView, ActivityIndicator, TextInput, Touchable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-web";



export default function SearchMuseum() {

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <MapView style={styles.map}>
          <View style={styles.consearchbar}>
            <TextInput
              style={styles.SearchB}
              placeholder = "위치"
            >
            </TextInput>
            <TextInput
              style={styles.SearchB}
              placeholder = "검색어"
            >
            </TextInput>
          </View>

          <View style={styles.historybar}>            
            
          </View>
        </MapView>
      </View>
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  root: {
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  consearchbar: {
    justifyContent: "space-around",
    flexDirection: "row"
  },
  map: {
    display: "flex",
    flexDirection: "column",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  SearchB: {
    backgroundColor : "white",
    marginTop: 20,
    width: 160,
    height: 45,
    margin: 10,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1.5,

    
  },
  searchbutton: {

  },
  historybar: {
    height: "50%",
    width: "100%",
    borderRadius: 16,
    backgroundColor: "white",
    position:"absolute",
    bottom:-10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  containermyloca:{
    width: 50,
    height:50,
    borderRadius:100,
    backgroundColor:"white",
  }
  });
