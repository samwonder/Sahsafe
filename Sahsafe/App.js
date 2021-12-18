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
 
 const Store = Config.reduxInit();
 export default class App extends Component {
   constructor() {
     super();
     this.state = {};
     //  runRootSaga();
     // for hide warning messages
     console.disableYellowBox = true;
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