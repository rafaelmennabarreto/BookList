import React from 'react';
import {View, Text} from 'react-native';
import SearchBar from 'react-native-material-design-searchbar';

// import { Container } from './styles';

export default function Home() {
  return (
    <View>
      <SearchBar
        height={50}
        placeholder={'Digite o nome do livro ...'}
        autoCorrect={false}
        padding={5}
      />
    </View>
  );
}
