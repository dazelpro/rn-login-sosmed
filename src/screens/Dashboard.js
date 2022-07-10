import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Dashboard = () => {
    const dataLogin = useSelector(state => state.login);
    return (
        <View style={{padding: 15, marginTop: 20}}>
            <Text style={{fontSize: 11, color: '#000'}}>Welcome</Text>
            <Text style={{fontSize: 20, color: '#000'}}>{dataLogin.name}</Text>
            <Text style={{fontSize: 11, color: '#000'}}>{dataLogin.email}</Text>
        </View>
    );
};

export default Dashboard;
