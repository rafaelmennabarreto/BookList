import React, {useEffect} from 'react';
import {StyleSheet, Dimensions, View, Image, Text} from 'react-native';

import CardView from 'react-native-cardview';

const {width} = Dimensions.get('window');
export default function ItemView(props) {
  const {title, urlImage, key} = props;

  return (
    <CardView key={key}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: urlImage ? urlImage : '',
        }}
      />
      <Text style={styles.text}> {title} </Text>
    </CardView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    paddingTop: 5,
    paddingBottom: 15,
  },
  image: {
    height: 210,
    width: width * 0.9,
  },
  text: {
    width: width * 0.7,
    textAlign: 'center',
  },
});
