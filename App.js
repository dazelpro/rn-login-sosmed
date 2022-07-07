import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import SplashScreen from './src/screens/SplashScreen';

const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                <Stack.Screen
                    name="SplashScreen"
                    options={{headerShown: false}}
                    component={SplashScreen}
                />
                <Stack.Screen
                    name="Login"
                    options={{headerShown: false}}
                    component={Login}
                />
                <Stack.Screen
                    name="Dashboard"
                    options={{headerShown: false}}
                    component={Dashboard}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
