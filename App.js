import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>Ini Adalah Tugas 2 Praktikum DPM</Text>
      <View style={styles.boxContainer}>
        <View style={styles.kotak1}></View>
        <View style={styles.kotak2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  kotak1: {
    width: 100,
    height: 100,
    backgroundColor: 'cyan',
  },
  kotak2: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
  },
});
