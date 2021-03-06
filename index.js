/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';

// import redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/redux/reducers';
const store = createStore(reducers);

const AppContainer = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
