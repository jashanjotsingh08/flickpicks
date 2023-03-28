import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Card, Title } from 'react-native-paper';
import { IMAGE_URL } from '../../utils/api/movieService';

const Tile = ({ posterUrl, title }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card} contentStyle={styles.cardInner} mode='elevated' elevation={1}>
        <Card.Cover style={styles.image} source={{ uri: `${IMAGE_URL}/original/${posterUrl}` }} />
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <Title style={styles.title}>{title}</Title>
        </View>
      </Card>
    </View>
  );
};

export default Tile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '200px',
    padding: 8,
    borderRadius: 16,
    shadow: {
      color: '#000000',
      blur: 10,
      x: -2,
      y: -2,
    },
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  cardInner: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 16,
  },
});
