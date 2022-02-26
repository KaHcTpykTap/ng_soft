import React, { useContext, useEffect, useState } from 'react'
import { View, TextInput, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Item from './Item';
import { ItemContext, MyContext } from './context/context';
import Spinner from './Spinner'
import { movies } from './context/data';

const HomePage = ({ navigation }) => {

  const data = useContext(MyContext);
  const [details, setDetails] = useContext(ItemContext);
  const [value, setValue] = useState('');
  const [isFlag, setIsFlag] = useState(false);

  useEffect(() => {

    const changeFlag = async () => {
      await delay(1500);
      setIsFlag(true);
    }
    changeFlag();
    
  }, [])

  const delay = async ms => new Promise(res => setTimeout(res, ms));

  const renderItem = ({ item }) => {

    const navigatiDetails = () => {
      navigation.navigate('Details');
      setDetails(item);
    }

    return (
      <Item
        title={item.title}
        rating={item.rating}
        image={item.image}
        releaseYear={item.releaseYear}
        genre={item.genre}
        onPress={navigatiDetails}
      />
    )
  };

  const filteredMovies = data.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <TextInput
          onChangeText={setValue}
          value={value}
          placeholder="Search movie..." />
      </View>

      {isFlag ?
        <FlatList
          data={filteredMovies.sort((a, b) => b.rating - a.rating)}
          renderItem={renderItem}
          keyExtractor={item => `${item.image}#`}
        />
        :
        <Spinner />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  search: {
    height: 40,
    padding: 10,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  }
});

export default HomePage