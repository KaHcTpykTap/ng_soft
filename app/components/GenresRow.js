import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const GenresRow = ({ genre }) => {
    return (
        <View style={styles.container}>
            <Text>Genre: </Text>
            {genre.map((item, index) => (
                <Text key={`${index}#_`}> {item} |</Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontSize: 15,
        flexDirection: "row",
        flexWrap: "wrap"
    },
});

export default GenresRow