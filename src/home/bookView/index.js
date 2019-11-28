import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {Card, Text, Image, Button} from 'react-native-elements';

import db from '../../database/db';
import bookFactory from '../../factory/bookFactory';

export default function BookView({navigation}) {
  const ADD_MESSAGE = 'Adicionar aos favoritos';
  const REMOVE_MESSAGE = 'remover dos favoritos';
  const book = navigation.getParam('data');
  const [isFavorited, updateIsFavorited] = useState(false);
  const [buttonTitle, updateButtonTitle] = useState('Adicionar aos favoritos');

  useEffect(() => {
    getSavedBook();
  });

  async function getSavedBook() {
    console.log('aqui');
    const savedBook = await db.getById(db.SchemaNames.BookSchema, book.id);
    if (savedBook) {
      updateIsFavorited(true);
      updateButtonTitle(REMOVE_MESSAGE);
    }
  }

  async function handleButton() {
    if (!isFavorited) {
      addFavorite();
    } else {
      removeFavorite();
    }
  }

  async function addFavorite() {
    const {SchemaNames, write} = db;
    const newBook = bookFactory.generateBook(
      book.id,
      book.volumeInfo.title,
      book.volumeInfo.imageLinks.thumbnail,
      book.volumeInfo.description,
    );
    await write(SchemaNames.BookSchema, newBook);
    const savedBook = await db.getById(db.SchemaNames.BookSchema, book.id);

    toogleButtonMessage(savedBook, REMOVE_MESSAGE, () =>
      updateIsFavorited(true),
    );
  }

  async function removeFavorite() {
    const bookToRemove = await db.getById(db.SchemaNames.BookSchema, book.id);
    const isRemoved = await db.remove(bookToRemove);
    toogleButtonMessage(isRemoved, ADD_MESSAGE, () => updateIsFavorited(false));
  }

  function toogleButtonMessage(itemToCompare, message, callback) {
    if (itemToCompare) {
      updateButtonTitle(message);
      callback() || '';
    }
  }

  return (
    <ScrollView>
      <Card title={book.volumeInfo.title}>
        <Button
          title={buttonTitle}
          type="outline"
          containerStyle={{marginBottom: 15}}
          onPress={handleButton}
        />
        <Image
          source={{uri: book.volumeInfo.imageLinks.thumbnail}}
          style={{height: 300, marginBottom: 15}}
          resizeMode="contain"
        />
        <Text style={{textAlign: 'center', fontSize: 16}}>
          {book.volumeInfo.description}
        </Text>
      </Card>
    </ScrollView>
  );
}
