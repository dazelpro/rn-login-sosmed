import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ToastAndroid,
    StatusBar,
} from 'react-native';
import {
    GraphRequest,
    GraphRequestManager,
    LoginManager,
} from 'react-native-fbsdk';

GoogleSignin.configure({
    webClientId:
        '53061255389-m1q22e861121jn79k9me2af05uq8tuk1.apps.googleusercontent.com',
    offlineAccess: true,
});

const Login = ({navigation}) => {
    const onLoginGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            let data = {
                user: {
                    email: userInfo['user']['email'],
                    id: userInfo['user']['id'],
                    name: userInfo['user']['name'],
                    photo: userInfo['user']['photo'],
                    provider: 'Google',
                },
            };
            // loginProcess(data);
            ToastAndroid.show(
                `Selamat datang ${data.user.name}`,
                ToastAndroid.SHORT,
            );
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                ToastAndroid.show(
                    'Proses login dibatalkan',
                    ToastAndroid.SHORT,
                );
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('e 2');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                ToastAndroid.show(
                    'Play service tidak didukung',
                    ToastAndroid.SHORT,
                );
            } else {
                console.log(error);
            }
        }
    };

    const onLoginFacebook = () => {
        LoginManager.logInWithPermissions(['public_profile']).then(
            login => {
                if (login.isCancelled) {
                    ToastAndroid.show(
                        'Login facebook batal',
                        ToastAndroid.SHORT,
                    );
                } else {
                    //Dari sini ambil token
                    const tokenFB = null;
                    const PROFILE_REQUEST_PARAMS = {
                        fields: {
                            string: 'id, name, email, picture.type(large)',
                        },
                    };
                    const profileRequest = new GraphRequest(
                        '/me',
                        {tokenFB, parameters: PROFILE_REQUEST_PARAMS},
                        (error, result) => {
                            if (error) {
                                console.log('login info has error: ' + error);
                            } else {
                                let data = {
                                    user: {
                                        email: result['email'] || '-',
                                        id: result['id'],
                                        name: result['name'],
                                        photo: result['picture']['data']['url'],
                                        provider: 'Facebook',
                                    },
                                };
                                // loginProcess(data);
                                ToastAndroid.show(
                                    `Selamat datang ${data.user.name}`,
                                    ToastAndroid.SHORT,
                                );
                            }
                        },
                    );
                    new GraphRequestManager()
                        .addRequest(profileRequest)
                        .start();
                }
            },
            error => {
                console.log('Login fail with error: ' + error);
            },
        );
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
                    <Text style={{color: '#000', fontSize: 16}}>
                        Login with Google
                    </Text>
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
