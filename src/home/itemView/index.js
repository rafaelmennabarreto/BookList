import React from 'react';
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Card, Image} from 'react-native-elements';

const {width} = Dimensions.get('window');
export default function ItemView(props) {
  const {title, urlImage, key, onPress} = props;

  function press() {
    onPress ? onPress() : '';
  }

  return (
    <TouchableOpacity onPress={press}>
      <Card containerStyle={styles.container} title={title} key={key}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: urlImage ? urlImage : '',
          }}
          placeholderContent="loading..."
        />
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: 210,
    marginBottom: 7,
  },
  text: {
    width: width * 0.7,
    textAlign: 'center',
  },
});
