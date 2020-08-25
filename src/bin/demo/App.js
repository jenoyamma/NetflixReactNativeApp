////////////////////////////////////////////////////////////////////////////////////////////////
// Utilities
import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import { enableScreens } from 'react-native-screens';
enableScreens();

import {createNativeStackNavigator} from 'react-native-screens/native-stack';
const NativeStack = createNativeStackNavigator();

// Amplify Authenticator
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
Amplify.configure({...config, Analytics: {disabled: true}})

// Screens
import Movie from './src/screen/Movie';
import MovieDetail from './src/screen/MovieDetail';

////////////////////////////////////////////////////////////////////////////////////////////////

function MovieScreen() { 
  return ( 
    <View style={{flex: 1}}>
      <NativeStack.Navigator 
        initialRouteName="Movie" 
        screenOptions={{
          headerShown: false,
        }}
      >
        <NativeStack.Screen
          name="Movie"
          component={Movie}
        />              
        <NativeStack.Screen
          name="MovieDetail"
          component={MovieDetail}
          options={navigation => ({
            stackPresentation: 'modal'
          })}
        />                        
      </NativeStack.Navigator>
    </View>
  );
}

function SearchScreenTab() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Search Screen</Text>
    </SafeAreaView>
  );
}

function DownloadScreenTab() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Download Screen</Text>
    </SafeAreaView>
  );
}

function MyTabs() {
  return (
      <Tab.Navigator
        initialRouteName="Movie"  
        tabBarOptions={{
          activeTintColor: '#ffffff',
          inactiveTintColor: '#DEDEDE',
          style : {
            borderTopWidth: 0,
            showIcon: true,
            showLabel: false,
            backgroundColor: '#000000'
          },
        }}    
      >
        <Tab.Screen
          name="Movie"
          component={MovieScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <TouchableOpacity style={{flex:1}}>
                <View style={{flex:1}}>
                    <Icon name="md-home" color={color} size={30} />
                </View>
              </TouchableOpacity>            
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreenTab}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => (
              <TouchableOpacity style={{flex:1}}>
                <View style={{flex:1}}>
                    <Icon name="md-search" color={color} size={30} />
                </View>
              </TouchableOpacity>            
            ),
          }}
        />
        <Tab.Screen
          name="Download"
          component={DownloadScreenTab}
          options={{
            tabBarLabel: "Downloads",
            tabBarIcon: ({ color, size }) => (
              <TouchableOpacity style={{flex:1}}>
                <View style={{flex:1}}>
                    <Icon name="md-download" color={color} size={30} />
                </View>
              </TouchableOpacity>            
            ),
          }}
        />    
      </Tab.Navigator>
  );
}

// function Root() {
//   return(
//     <NavigationContainer>      
//       {MyTabs()}
//     </NavigationContainer>
//   )
// }

// export default function App() {
//   return (
//     <Root/>
//   )
// }

function Root() {
  return(
    <NavigationContainer>      
      {MyTabs()}
    </NavigationContainer>
  )
}

const AppWithAuth = withAuthenticator(Root, false)

export default function App() {
    return (
      <AppWithAuth/>
    )
}