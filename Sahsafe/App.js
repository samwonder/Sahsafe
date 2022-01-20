/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { Provider } from 'react-redux';
 import Navigator from './app/navigator';
 import * as Config from "@configs";
 import AppLoader from "@components/appLoader";
 import { LogBox } from 'react-native';
 import {Notifications} from 'react-native-notifications';
 const Store = Config.reduxInit();
 export default class App extends Component {
   constructor() {
     super();
     this.state = {};
     //  runRootSaga();
     // for hide warning messages
     LogBox.ignoreAllLogs();
     Notifications.registerRemoteNotifications();
     Notifications.events().registerRemoteNotificationsRegistered((event) => {
      console.log(event.deviceToken);
    });

     Notifications.events().registerNotificationReceivedForeground((notification, completion) => {
      console.log(JSON.stringify(notification.payload));

     // console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`);
     // completion({alert: false, sound: false, badge: false});
    });

    Notifications.events().registerNotificationOpened((notification, completion) => {
      console.log(`Notification opened: ${notification.payload}`);
     // completion();
    });
   }
    
    render() {
    //  console.log("🚀 ~ file: App.js ~ line 13 ~ Store", Store)
     return (
       <Provider store={Store}>
         <AppLoader />
         <Navigator />
      </Provider>
     );
   }
 }