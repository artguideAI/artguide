import * as React from "react";
import { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Dimensions, SafeAreaView, ActivityIndicator } from "react-native";
import SearchBar from "../../component/SearchBar";



export default function SearchMuseum() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // get data from the fake api endpoint
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <MapView style={styles.map}>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
          style={styles.SearchB}
        />
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
  map: {
    display: "flex",
    flexDirection: "column",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  SearchB: {
  },
  });
