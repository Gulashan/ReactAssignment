// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={styles.buttonWrapper}>
          <View style={styles.buttonRow}>
            <TouchableHighlight
              style={{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 4,
                width: (Dimensions.get('window').width * 0.5)-30,
                height: (Dimensions.get('window').width * 0.5)-30,
                backgroundColor: '#f00',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              underlayColor='#ccc'
              onPress={() => alert('Profile')}
            >
              <Text> Profile </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 4,
                width: (Dimensions.get('window').width * 0.5)-30,
                height: (Dimensions.get('window').width * 0.5)-30,
                backgroundColor: '#f00',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20
              }}
              underlayColor='#ccc'
              onPress={() => alert('My Account')}
            >
              <Text> My Account </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonRow}>
          <TouchableHighlight
              style={{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 4,
                width: (Dimensions.get('window').width * 0.5)-30,
                height: (Dimensions.get('window').width * 0.5)-30,
                backgroundColor: '#f00',
                justifyContent: 'center',
                alignItems: 'center',
                padding:20
              }}
              underlayColor='#ccc'
              onPress={() => alert('My Orders')}
            >
              <Text> My Orders </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 4,
                width: (Dimensions.get('window').width * 0.5)-30,
                height: (Dimensions.get('window').width * 0.5)-30,
                backgroundColor: '#f00',
                justifyContent: 'center',
                alignItems: 'center',
                padding:20
              }}
              underlayColor='#ccc'
              onPress={() => alert('My Cart')}
            >
              <Text> My Cart </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    justifyContent: "space-around"
  },
  buttonRow: {
    marginTop: 0,
    flexDirection: 'row',
    color: '#e31837',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonText: {
    color: '#000'
  },
});

export default HomeScreen;
