import React, {Component} from 'react';
import Homepage from "./Pages/HomePage/Homepage";
import Signup from "./Components/Authentication/Signup/Signup";
import Login from "./Components/Authentication/Login/Login";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Authentication from "./Components/Authentication/Authentication";
import * as colors from './Components/Color'
import UserDisplayScreen from "./Components/UserPage/UserDisplayScreen";

import VaccinationClinic from "./Pages/VacinationClinic/VaccinationClinic";
import VaccinationClinicSignUp from './Pages/VacinationClinic/Signup/Signup';
import VaccinationClinicLogin from './Pages/VacinationClinic/Login/Login';

export default class App extends Component {

  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }} >
          <Stack.Screen name="Home" component={Homepage} options={{
            title: '',
            headerStyle: {
              backgroundColor: colors.OFF_WHITE
            },
            headerTintColor: colors.OFF_WHITE
          }}/>
          <Stack.Screen name="Authentication" component={Authentication} options={{
            title: '',
            headerStyle: {
              backgroundColor: colors.OFF_WHITE
            },
            headerTintColor: colors.OFF_WHITE
          }}/>
          <Stack.Screen name="SignUp" component={UserDisplayScreen} options={{
            title: '',
            headerStyle: {
              backgroundColor: colors.OFF_WHITE
            },
            headerTintColor: colors.OFF_WHITE
          }}/>
          <Stack.Screen name="Login" component={Login} options={{
            title: '',
            headerStyle: {
              backgroundColor: colors.OFF_WHITE
            },
            headerTintColor: colors.OFF_WHITE
          }}/>
          <Stack.Screen name="VaccinationClinic" component={VaccinationClinic} options={{
            title: '',
            headerStyle: {
              backgroundColor: colors.OFF_WHITE
            },
            headerTintColor: colors.OFF_WHITE
          }}/>
          <Stack.Screen name="VaccinationClinicSignUp" component={VaccinationClinicSignUp} options={{
            title: '',
            headerStyle: {
              backgroundColor: colors.OFF_WHITE
            },
            headerTintColor: colors.OFF_WHITE
          }}/>
          <Stack.Screen name="VaccinationClinicLogin" component={VaccinationClinicLogin} options={{
            title: '',
            headerStyle: {
              backgroundColor: colors.OFF_WHITE
            },
            headerTintColor: colors.OFF_WHITE
          }}/>
        </Stack.Navigator>

      </NavigationContainer>
    );

  };

}

