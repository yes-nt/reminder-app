import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import MyDonationScreen from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import MyReceivedBooksScreen from '../screens/MyReceivedBooksScreen';

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
      navigationOptions: {
        drawerIcon: <Icon 
        name = 'Home'
        type = 'fontawesome5'
        />,
      },
    },
    MyDonations: {
      screen: MyDonationScreen,
      NavigationOptions:{
      drawerIcon:<Icon 
      name = 'Gift'
      type = 'font-awesome'
      />,
      drawerLabel:"My Donations"  
      }
    },
    Notification: {
      screen: NotificationScreen,
      NavigationOptions:{
      drawerIcon:<Icon 
      name = 'Bell'
      type = 'font-awesome'
      />,
      drawerLabel:"Notifications"  
      }
    },
    MyReceivedBooks: {
      screen: MyReceivedBooksScreen,
      NavigationOptions:{
      drawerIcon:<Icon 
      name = 'Gift'
      type = 'font-awesome'
      />,
      drawerLabel:"My Recievedd Books"  
      }
    },
    Setting: {
      screen: SettingScreen,
      NavigationOptions:{
      drawerIcon:<Icon 
      name = 'Settings'
      type = 'fontawesome5'
      />,
      drawerLabel:"Settings"  
      }
    },
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: 'Home',
  }
);
