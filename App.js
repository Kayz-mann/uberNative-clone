import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider  } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import store from './store';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          //  if ios platform is being used use padding otherwise use height
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{flex: 1}}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
        <Stack.Navigator>
          <Stack.Screen 
              name='HomeScreen' 
              component={HomeScreen} 
              options={{ 
              headerShown: false,
            }} 
          />
           <Stack.Screen 
              name='MapScreen' 
              component={MapScreen} 
              options={{ 
              headerShown: false,
            }} 
          />
        </Stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Directions API from google
// Places API from google
// Distance matrix API
