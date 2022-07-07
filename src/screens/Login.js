import React from 'react';
import {View, Text, TouchableOpacity, ToastAndroid, StatusBar} from 'react-native';

const Login = ({navigation}) => {
    const onLoginGoogle = () => {
        ToastAndroid.show('Login google sedang diproses', ToastAndroid.SHORT);
        navigation.navigate('Dashboard');
    };
    const onLoginFacebook = () => {
        ToastAndroid.show('Login facebook sedang diproses', ToastAndroid.SHORT);
        navigation.navigate('Dashboard');
    };
    const onLoginEmail = () => {
        ToastAndroid.show('Fitur ini belum tersedia', ToastAndroid.SHORT);
    };
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
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#EFF2F5',
                }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#FFF',
                        marginTop: 10,
                        paddingHorizontal: 15,
                        paddingVertical: 8,
                        width: 200,
                        alignItems: 'center',
                        borderRadius: 5,
                    }}
                    onPress={onLoginGoogle}>
                    <Text style={{fontSize: 16}}>Login with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#1877F2',
                        marginTop: 10,
                        paddingHorizontal: 15,
                        paddingVertical: 8,
                        width: 200,
                        alignItems: 'center',
                        borderRadius: 5,
                    }}
                    onPress={onLoginFacebook}>
                    <Text style={{color: '#FFF', fontSize: 16}}>
                        Login with Facebook
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#F57208',
                        marginTop: 10,
                        paddingHorizontal: 15,
                        paddingVertical: 8,
                        width: 200,
                        alignItems: 'center',
                        borderRadius: 5,
                    }}
                    onPress={onLoginEmail}>
                    <Text style={{color: '#FFF', fontSize: 16}}>
                        Login with Email
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default Login;
