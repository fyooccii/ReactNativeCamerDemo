/**
 * Sample React Native Camera Demo
 */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

const App = () => {
  const [barcode, setBarcode] = useState(null);
  const [cameraShow, setCamerShow] = useState(true);

  const readBarCode = data => {
    if (data) {
      setBarcode(data.data);
      setCamerShow(false);
    }
  };
  const initCamera = () => {
    setBarcode(null);
    setCamerShow(true);
  };

  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <View style={styles.topBar}>
          <Text style={styles.topBarTitleText}>React Native Scanner</Text>
        </View>
      </SafeAreaView>

      <View style={styles.caption}>
        <Text style={styles.captionTitleText}>
          Welcome To React-Native-Camera Tutorial
        </Text>
      </View>

      {cameraShow ? (
        <RNCamera style={styles.rnCamera} onBarCodeRead={readBarCode} />
      ) : (
        <Text>{barcode}</Text>
      )}

      <View style={styles.cameraControl}>
        <TouchableOpacity style={styles.btn} onPress={initCamera}>
          <Text style={styles.btnText}>New QR Scan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  topBar: {
    height: 50,
    backgroundColor: '#62d1bc', // green
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarTitleText: {
    color: '#ffffff', // white
    fontSize: 20,
  },
  caption: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  captionTitleText: {
    color: '#121B0D', // black
    fontSize: 16,
    fontWeight: '600',
  },
  rnCamera: {
    height: '40%',
    width: '40%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  cameraControl: {
    alignItems: 'center',
  },
  btn: {
    borderRadius: 20,
    marginTop: 30,
    backgroundColor: 'skyblue',
    padding: 15,
  },
});

export default App;
