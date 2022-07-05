import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native'
import React from 'react'
import Artpreview from '../../component/Artpreview'

export default function AllArtwork({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Artpreview />
        <Artpreview />
        <Artpreview />
        <Artpreview />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  artcontainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  },
  artimage: {
    backgroundColor: 'grey',
    width: 100,
    height: 100,
    margin: 10,
  },
  arttextcontainer: { margin: 10, flex: 1 },
  arttitle: { color: 'white', margin: 5, fontSize: 15, fontWeight: 'bold' },
  artartist: { color: 'white', margin: 5 },
  artinfo: { color: 'white', margin: 5 },
})
