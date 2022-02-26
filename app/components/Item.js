import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import GenresRow from './GenresRow';

const Item = ({ title, rating, genre, releaseYear, image, onPress }) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}>
      <View style={(styles.container)}>
        <View style={(styles.sideLeft)}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.baseText}>Rating: {rating}</Text>
          <GenresRow genre={genre} />
          <Text style={styles.baseText}>Release year: {releaseYear}</Text>
        </View>
        <View style={(styles.sideRight)}>
          <Image source={{ uri: `${image}` }} style={(styles.image)} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    flex: 1,
    minWidth: '100%'
  },
  baseText: {
    fontSize: 15,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  sideLeft: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
  },
  sideRight: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    flex:1,
    height: 120,
    borderRadius: 10
  },
});

export default Item