import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import React from 'react'

export default function Artpreview({}) {
  return (
    <TouchableOpacity style={styles.artcontainer}>
      <View style={styles.artimage}></View>
      <View style={styles.arttextcontainer}>
        <Text style={styles.arttitle}>Title</Text>
        <Text style={styles.artartist}>Artist</Text>
        <Text style={styles.artinfo}>
          InfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfoInfo
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
