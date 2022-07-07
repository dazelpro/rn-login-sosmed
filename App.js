import React from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
const App = () => {
    const onLoginGoogle = () => {
        ToastAndroid.show(
            'Login google sedang diproses',
            ToastAndroid.SHORT,
        );
    };
    const onLoginFacebook = () => {
        ToastAndroid.show(
            'Login facebook sedang diproses',
            ToastAndroid.SHORT,
        );
    };
    const onLoginEmail = () => {
        ToastAndroid.show(
            'Fitur ini belum tersedia',
            ToastAndroid.SHORT,
        );
    };
    return (
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
                    borderRadius: 8,
                }}
                onPress={onLoginGoogle}>
                <Text>Login with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor: '#1877F2',
                    marginTop: 10,
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    width: 200,
                    alignItems: 'center',
                    borderRadius: 8,
                }}
                onPress={onLoginFacebook}>
                <Text style={{color: '#FFF'}}>Login with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor: '#F57208',
                    marginTop: 10,
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    width: 200,
                    alignItems: 'center',
                    borderRadius: 8,
                }}
                onPress={onLoginEmail}>
                <Text style={{color: '#FFF'}}>Login with Email</Text>
            </TouchableOpacity>
        </View>
    );
};

export default App;
