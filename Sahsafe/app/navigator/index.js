
import * as React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/Splash';
import GetMobileNumber from '../screens/GetMobileNumber';
import OTPScreen from '../screens/OTPScreen';
import UserDetail from '../screens/UserDetail';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/home';
import SuccessScreen from '../screens/SuccessScreen'
import SearchScreen from '../screens/SearchScreen'

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name="GetMobileNumber" component={GetMobileNumber} options={{headerShown: false}}/>
        <Stack.Screen name="OTPScreen" component={OTPScreen} options={{headerShown: false}}/>
        <Stack.Screen name="UserDetail" component={UserDetail} options={{headerShown: false}}/>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}