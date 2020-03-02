import { AppRegistry } from 'react-native'

import App from 'components/src/App'

AppRegistry.registerComponent('ReactMono', () => App)

AppRegistry.runApplication('ReactMono', {
    rootTag: document.getElementById('root'),
})