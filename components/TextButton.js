import React from 'react';
import { TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import { purple, white } from '../utils/colors';

export default function TextButton({ children, onPress }) {
  return (
    <TouchableOpacity
      style={
        Platform.OS === 'android'
          ? styles.androidSubmitBtn
          : styles.iosSubmitBtn
      }
      onPress={onPress}
    >
      <Text style={styles.submitTextBtn}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
  },
  androidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  submitTextBtn: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
});
