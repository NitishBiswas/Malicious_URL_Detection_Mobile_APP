/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({ navigation }) => {

  setTimeout(() => {
    navigation.navigate('HomeScreen');
  }, 2500);

  return (
    <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.container}>
        <Image
          resizeMode="contain"
          source={require('../images/hacker.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>Malicious URL Detection</Text>
      </LinearGradient>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        height: 300,
        width: 300,
  },
  logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default SplashScreen;
