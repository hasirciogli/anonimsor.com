import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView, TouchableOpacity, Alert, PermissionsAndroid, ActivityIndicator } from 'react-native';
import { useState } from 'react';

import { useFonts } from 'expo-font';

import { HomeScreen } from './pages/home';
import { LoginScreen, RegisterScreen, AuthScreen } from './pages/auth';
import { LoadingScreen } from './pages/loadingScreen';
import { PermissionRequestScreen } from './pages/requestPermissionsScreen';
import { ProfileScreen } from './pages/profile';
import { QuestScreen } from './pages/questPage';




const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Loading'>
      <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      <Stack.Screen options={{ headerShown: true, headerShadowVisible: false, headerTitle: "Back", headerStyle: {}}} name="QuestPage" component={QuestScreen} />




      <Stack.Screen options={{ headerShown: true, headerStyle: {}}} name="Profile" component={ProfileScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Loading" component={LoadingScreen} />
      <Stack.Screen options={{ headerShown: false }} name="PermissionRequest" component={PermissionRequestScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Auth" component={AuthScreen} />
      <Stack.Screen options={{ headerShown: true }} name="Login" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: true }} name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Open-Sans-v1': require('./assets/fonts/opensansv1.ttf'),
  });


  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: "white"
  }
});
