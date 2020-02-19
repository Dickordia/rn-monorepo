/**
 * @format
 */

import { name as appName } from './app.json';
import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';

import App from 'components/src/App';
AppRegistry.registerComponent(appName, () => App);
