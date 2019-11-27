import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SearchBar from 'react-native-material-design-searchbar';
import BookService from '../service/bookService';

// import { Container } from './styles';

export default function Home() {
  const [text, updateText] = useState('');
  const [books, updateBooks] = useState([]);

  async function LiveSearch(value) {
    if (value.length >= 3) {
      updateText(value);
      const data = await BookService.getBookByName(text);
      console.log(data.items[0].volumeInfo);
    }
  }

  return (
    <View>
      <SearchBar
        height={50}
        placeholder={'Digite o nome do livro ...'}
        autoCorrect={false}
        padding={5}
        onSearchChange={LiveSearch}
      />
      <View>
        {books && books.map(book => <Text>{book.volumeInfo.title}</Text>)}
      </View>
    </View>
  );
}
