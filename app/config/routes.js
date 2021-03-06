import { StackNavigator, TabNavigator } from 'react-navigation';
import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button
  } from 'react-native';

  import Login from './../screens/Login';
  import {Feed} from './../screens/Feed';
  import Home from './../screens/Home';
  import Search from './../screens/Search';
  import Add from './../screens/Add';
  import Profile from './../screens/Profile';
  import Notif from './../screens/Notif';

   

  const insta = StackNavigator({
    Login: { screen: Login,
    navigationOptions: ({navigation}) => ({
      header: null,
      
      headerBackTitle: null
    })  },
    Feed: {screen: Feed,
      navigationOptions: ({navigation}) => ({
        headerBackTitle: null,
        headerTitle: 'InstaReact',
        headerStyle: {
          backgroundColor: 'white'
        },
        headerTitleStyle:{
          color: 'black',
          fontFamily: 'painter',
          textAlign: 'center',
          alignSelf: 'center',
          fontWeight: "400",
          fontSize: 30,
        },
        headerLeft: null
      })},
    
  },
{
  
});


  
AppRegistry.registerComponent('insta', () => insta);