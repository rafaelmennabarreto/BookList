import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import BookService from '../../service/bookService';

import SearchBar from 'react-native-material-design-searchbar';
import ItemView from '../itemView';

// import { Container } from './styles';

export default function Main({navigation}) {
  const [text, updateText] = useState('');
  const [books, updateBooks] = useState([]);

  async function LiveSearch(value) {
    if (value.trim().length >= 2) {
      setTimeout(async () => {
        updateText(value);
        const data = await BookService.getBookByName(text);
        if (data) {
          updateBooks(data.items);
        }
      }, 250);
    }
  }

  function navigateToBookDetail(book) {
    navigation.navigate('BOOK', {data: book});
  }

  return (
    <ScrollView style={{flex: 1}}>
      <SearchBar
        height={50}
        placeholder={'Digite o nome do livro ...'}
        autoCorrect={false}
        padding={5}
        onSearchChange={LiveSearch}
      />
      <View>
        {books &&
          books.map((book, index) => (
            <ItemView
              title={book.volumeInfo.title}
              urlImage={book.volumeInfo.imageLinks.thumbnail}
              key={index}
              onPress={() => navigateToBookDetail(book)}
            />
          ))}
      </View>
    </ScrollView>
  );
}
