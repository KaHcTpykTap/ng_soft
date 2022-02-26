import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import GenresRow from './GenresRow';
import { ItemContext } from './context/context';


const Details = () => {

    const [details, setDetails] = useContext(ItemContext);

    return (
            <View style={(styles.container)}>
                <View style={(styles.sideLeft)}>
                    <Text style={styles.titleText}>{details.title}</Text>
                    <Text style={styles.baseText}>Rating: {details.rating}</Text>
                    <GenresRow genre={details.genre} />
                    <Text style={styles.baseText}>Release year: {details.releaseYear}</Text>
                </View>
                <View style={(styles.sideRight)}>
                    <Image source={{ uri: `${details.image}` }} style={(styles.image)} />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    baseText: {
      fontSize: 15,
    },
    titleText: {
      paddingTop: 20,
      fontSize: 24,
      fontWeight: "bold"
    },
    container: {
      flex: 1,
      flexDirection: "column-reverse",
      justifyContent: "center",
  },
    sideLeft: {
      flex: 2,
      flexDirection: "column",
     alignItems: "center",
    },
    sideRight: {
      flex: 1,
      justifyContent: "center",
    },
    image: {
      flex: 1,
  },
  });

export default Details