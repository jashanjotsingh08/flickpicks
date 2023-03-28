import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Card, Title } from 'react-native-paper';
import { IMAGE_URL } from '../../utils/api/movieService';
import { useTheme } from 'react-native-paper';

const Tile = ({ posterUrl, title }) => {
  const { glassmorphism } = useTheme();
  return (
    <View style={styles.container}>
      <Card style={{ ...glassmorphism, ...styles.card }} contentStyle={styles.cardInner} mode='elevated' elevation={1}>
        <TouchableOpacity>
          <Image style={styles.image} source={{ uri: `${IMAGE_URL}/w185/${posterUrl}` }} />
        </TouchableOpacity>
        {/* <View style={styles.overlay} /> */}
        {/* <View style={styles.textContainer}>
          <Title style={styles.title}>{title}</Title>
        </View> */}
      </Card>
    </View>
  );
};

export default Tile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    height: 260,
    paddingVertical: 16,
    marginTop: 16,
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
    height: 260,
    borderRadius: 16,
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
