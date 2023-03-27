/**
 * @format
 * import librarys for making a component
 * create a component (App)
 * render it to the device
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
