import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {Card, Text, Image, Button} from 'react-native-elements';

export default function BookView({navigation}) {
  const book = navigation.getParam('data');

  return (
    <ScrollView>
      <Card title={book.volumeInfo.title}>
        <Button
          title="Adicionar aos favoritos"
          type="outline"
          containerStyle={{marginBottom: 15}}
        />
        <Image
          source={{uri: book.volumeInfo.imageLinks.thumbnail}}
          style={{height: 300, marginBottom: 15}}
          resizeMode="contain"
        />
        <Text style={{textAlign: 'left', fontSize: 16}}>
          {book.volumeInfo.description}
        </Text>
      </Card>
    </ScrollView>
  );
}
