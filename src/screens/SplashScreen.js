import {StackActions} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';

const SplashScreen = ({navigation}) => {
    const [isLogin, setIsLogin] = React.useState(false);
    useEffect(() => {
        let routing = '';
        if (isLogin) {
            routing = 'Dashboard'
        } else {
            routing = 'Login'
        }
        setTimeout(() => {
            navigation.dispatch(StackActions.replace(routing));
        }, 1500);
    });
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1877F2',
                }}>
                <Text style={{fontSize: 20, color: '#FFF'}}>😊</Text>
                <Text style={{fontSize: 20, color: '#FFF'}}>
                    Login Sosial Media
                </Text>
            </View>
        </>
    );
};

export default SplashScreen;
