import React,{useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
StatusBar.setBackgroundColor('#242334'); // set màu background cho status
StatusBar.setBarStyle('light-content'); // set màu cho icon trong status
const App = () => {
// new 
  useEffect(() => {
    SplashScreen.hide();
  }, []);
// new 
  return (
    <SafeAreaView>
      <View style={{backgroundColor:'black'}}>
        <Text style={{color:'white'}}>SplashScreen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
