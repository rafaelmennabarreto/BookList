import React, {useState, useCallback} from 'react';
import {useFocusEffect} from 'react-navigation-hooks';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Card, Image} from 'react-native-elements';

import db from '../database/db';
import bookService from '../service/bookService';

const {width} = Dimensions.get('window');

export default function Favoritos({navigation}) {
  const [books, updateBooks] = useState([]);

  const allFavorites = useCallback(() => {
    getAllFavorites();
  }, []);

  useFocusEffect(allFavorites);

  async function getAllFavorites() {
    const {SchemaNames, getAll} = db;
    const favorites = await getAll(SchemaNames.BookSchema);
    updateBooks(favorites);
  }

  async function navigateToBookDetail(selectedBook) {
    const book = await bookService.getBookById(selectedBook.id);
    console.log(selectedBook.id);
    navigation.navigate('BOOK', {data: book.items[0]});
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {books &&
          books.map(b => (
            <TouchableOpacity onPress={() => navigateToBookDetail(b)}>
              <Card title={b.title} containerStyle={styles.cardContainer}>
                <Image
                  source={{
                    uri: b.imageUrl,
                  }}
                  style={{height: 150}}
                  resizeMode="contain"
                />
              </Card>
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cardContainer: {
    width: width * 0.4,
  },
});
