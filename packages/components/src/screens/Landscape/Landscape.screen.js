import React from 'react'
import Button from '../../views/Button';
import { getNavigation } from '../../router/Router';
import { SafeAreaView, View } from 'react-native';
import Header from '../../views/Header/Header';

export default function LandscapeScreen(props) {
    const navigation = getNavigation()

    const onD3Charts = () => {
        navigation.push('chartsD3')
    }

    const onJSCharts = () => {
        navigation.push('chartsJS')
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#23315f' }}>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center' }} >
                <View style={{ flex: 0.7, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Button style={{ maxWidth: '40%', height: '70%', backgroundColor: '#5f8db0' }} 
                            imageStyle={{ width: '80%', height: '64%', resizeMode: 'contain' }}
                            image={require('../../assets/img/icon-d3.png')}
                            onPress={onD3Charts}>D3 Charts</Button>
                    <Button style={{ maxWidth: '40%', height: '70%', backgroundColor: '#2a828f' }}
                            imageStyle={{ width: '80%', height: '64%', resizeMode: 'contain' }}
                            image={require('../../assets/img/chartjs-logo.png')}
                            onPress={onJSCharts}>Chart.JS </Button>
                </View>
            </SafeAreaView>
        </View>
    );
};

LandscapeScreen.navigationOptions = ({ navigation }) => {
    header: ({ navigation }) => {
        return (
            <View />
        );
    }
}