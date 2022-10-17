/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');

  const checkMalicious = () => {
    const formData = new FormData();
    formData.append('url', url);

    if (url === '') {
      Alert.alert(
        'Warning',
        'Please enter a valid URL!',
        [
          {
            text: 'Ok',
            style: 'default',
          },
        ],
        {
          cancelable: true,
        },
      );
    } else {
      setLoading(true);
      fetch('https://malicious-url-api.herokuapp.com/result', {
        method: 'POST',
        body: formData,
      }).then(res => res.json())
        .then(res => {
          setLoading(false);
          setUrl('');
          if (res.prediction === '0') {
            // Normal URL
            Alert.alert(
              'Result',
              'Your URL is not a malicious URL!',
              [
                {
                  text: 'Ok',
                  style: 'default',
                },
              ],
              {
                cancelable: true,
              },
            );
          } else {
            // Malicious URL
            Alert.alert(
              'Result',
              'Your URL is a malicious URL!',
              [
                {
                  text: 'Ok',
                  style: 'default',
                },
              ],
              {
                cancelable: true,
              },
            );
          }
        })
        .catch(() => {
          setLoading(false);
          Alert.alert(
            'Oops...',
            'Something went wrong while loading the page. Please try again later',
            [
              {
                text: 'Ok',
                style: 'default',
              },
            ],
            {
              cancelable: true,
            },
          );
        });
    }
  };

  return (
    <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.container}>
      <Image
        resizeMode="contain"
        source={require('../images/hacker.png')}
        style={styles.logoImage}
      />
      <Text style={styles.logoText}>Malicious URL Detection</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter a URL"
        placeholderTextColor="gray"
        underlineColorAndroid="transparent"
        onChangeText={text => setUrl(text)}
        value={url}
      />
      <TouchableOpacity style={styles.btnView} onPress={checkMalicious}>
        <Text style={styles.btnText}>{loading === true ? 'Please Wait...' : 'Check URL'}</Text>
      </TouchableOpacity>
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
    height: 200,
    width: 200,
  },
  logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  textInput: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    width: '80%',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'white',
    paddingLeft: 15,
    marginTop: 30,
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'white',
    paddingLeft: 15,
    marginTop: 30,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
  },
});

export default HomeScreen;
