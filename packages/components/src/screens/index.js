import LoginScreen from './Login/Login.screen';
import LandscapeScreen from './Landscape/Landscape.screen';

import ChartsJSBar from './ChartsJS/ChartsJSBar'
import ChartsJSLine from './ChartsJS/ChartsJSLine'
import ChartsJSPie from './ChartsJS/ChartJSPie'
import ChartsJSBubble from './ChartsJS/ChartJSBubble'

import ChartsD3Screen from './ChartsD3/ChartsD3Screen'
import BarChartScreen from './Chart.Bar/BarChart.screen';
import CurveChartScreen from './Chart.Curve/CurveChart.screen';
import PieChartScreen from './Chart.Pie/PieChart.screen';
import BubbleChartScreen from './Chart.Bubble/BubbleChart.screen';

import USMapScreen from './Map.US/USMap.screen';
import WorldMapScreen from './Map.World/WorldMap.screen';

import TableListScreen from './Table.List/TableList.screen';
import TableSimpleScreen from './Table.Simple/TableSimple.screen';


export const useScreens = () => {
    const login = LoginScreen; 
    const landscape = LandscapeScreen; 

    const chartsD3 = ChartsD3Screen;

    const chartJSBar = ChartsJSBar;
    const chartJSLine = ChartsJSLine;
    const chartJSPie = ChartsJSPie;
    const chartJSBubble = ChartsJSBubble;

    const barChart = BarChartScreen; 
    const curveChart = CurveChartScreen; 
    const pieChart = PieChartScreen; 
    const bubbleChart = BubbleChartScreen; 

    const usMap = USMapScreen;
    const worldMap = WorldMapScreen;

    const tableList = TableListScreen;
    const tableSimple = TableSimpleScreen;

    return { 
        login,
        landscape,
        chartJSBar, chartJSLine, chartJSPie, chartJSBubble,
        chartsD3, barChart, curveChart, pieChart, bubbleChart,
        usMap, worldMap,
        tableList, tableSimple,
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