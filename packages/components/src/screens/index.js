import LoginScreen from './Login/Login.screen';
import LandscapeScreen from './Landscape/Landscape.screen';

import ChartsJSBar from './ChartsJS/ChartsJSBar'
import ChartsJSLine from './ChartsJS/ChartsJSLine'
import ChartsJSPie from './ChartsJS/ChartJSPie'
import ChartsJSBubble from './ChartsJS/ChartJSBubble'

import ChartsD3Screen from './ChartsD3/ChartsD3Screen'



export const useScreens = () => {
    const login = LoginScreen; 
    const landscape = LandscapeScreen; 

    const chartsD3 = ChartsD3Screen;

    const chartJSBar = ChartsJSBar;
    const chartJSLine = ChartsJSLine;
    const chartJSPie = ChartsJSPie;
    const chartJSBubble = ChartsJSBubble;

    return { 
        login,
        landscape,
        chartJSBar, chartJSLine, chartJSPie, chartJSBubble,
        chartsD3
    }
}


export const getNavigation = () => {
    const navigation = useHistory();

    const push = (destination) => {
        navigation.push(destination)
    }

    const pop = (destination) => {
        navigation.goBack()
    }

    return { push, pop }
}