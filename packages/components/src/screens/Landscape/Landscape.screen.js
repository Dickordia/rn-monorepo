import React from 'react'
import Button from '../../views/Button';
import { getNavigation } from '../../router/Router';
import {SafeAreaView, View} from 'react-native';
import Header from '../../views/Header/Header';

export default function LandscapeScreen(props) {
    const navigation = getNavigation()

    const onCharts = () => {
        navigation.push('charts')
    }

    const onMaps = () => {
        navigation.push('maps')
    }

    const onTables = () => {
        navigation.push('tables')
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#23315f'}}>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center' }} >
                <View style={{ flex: 0.7, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                    <Button style={{ maxWidth: '24%', height: '60%', backgroundColor: '#b25900' }} onPress={onCharts}>Charts</Button>
                    <Button style={{ maxWidth: '24%', height: '70%', backgroundColor: '#2a828f' }} textStyle={{fontSize: 13}} onPress={onMaps}>CONTAINER </Button>
                    <Button style={{ maxWidth: '24%', height: '80%', backgroundColor: '#163f34' }} onPress={onTables}>Tables</Button>
                </View>
            </SafeAreaView>   
        </View>     
    );
};

LandscapeScreen.navigationOptions = ({ navigation }) => {
    header: ({ navigation }) => {
        return (
            <View/>
        );
    }
}