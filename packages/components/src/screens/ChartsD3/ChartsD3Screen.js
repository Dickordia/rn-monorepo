import React, { useState, useEffect, useRef } from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Image,
    SafeAreaView,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import PieChart from './PieChartScreen'
import BarChartScreen from './BarChartScreen'

export default function ChartsD3Screen(props) {
    const [orientation, setOrientation] = useState('')

    const pieChartDataInitial = [50, 10, 40, 95, 85, 91]
    const barChartData0Initial = [14, -1, 100, -95, -94, -24, -8, 85, -91, 35, -53]
    const barChartData1Initial = [24, 28, 93, 77, -42, -62, 52, -87, 21, 53, -78]

    const [pieChartData, setPieChartData] = useState(pieChartDataInitial)
    const [barChartData0, setBarChartData0] = useState(barChartData0Initial)
    const [barChartData1, setBarChartData1] = useState(barChartData1Initial)

    function randomValue(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const onRefresh = () => {
        var aNewState = []
        for (var i = 0; i < pieChartData.length; i++) {
            aNewState.push(randomValue(0, 100))
        }
        setPieChartData(aNewState)

        aNewState = []
        for (var i = 0; i < barChartData0.length; i++) {
            aNewState.push(randomValue(-100,100))
        }
        setBarChartData0(aNewState)

        aNewState = []
        for (var i = 0; i < barChartData1.length; i++) {
            aNewState.push(randomValue(-140, 140))
        }
        setBarChartData1(aNewState)
    }

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });

    const onChange = ({ window, screen }) => {
        let aSize = Dimensions.get('window')
        setOrientation((aSize.width < aSize.height) ? 'portrait' : 'landscape')
    };

    const aFlexDirection = orientation == 'landscape' ? 'row' : 'column'
    const aSize = orientation == 'landscape' ? { width: '44%', height: '90%' } : { width: '90%', height: '44%' }

    return (    
        < SafeAreaView style = { [style.container, { flexDirection: aFlexDirection}]}>
            <View style={[style.chartContainer2, {width: aSize.width, height: aSize.height}]}>
                <BarChartScreen data={[barChartData0, barChartData1]}/>
            </View>

            <View style={style.refreshContainer}>
                <TouchableOpacity activeOpacity={0.5} onPress={onRefresh}>
                    <Image
                        style={style.refresh}
                        source={require('../../assets/img/icon_refresh.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={[style.chartContainer2, { width: aSize.width, height: aSize.height }]}>
                <PieChart data={pieChartData}/>
            </View>
        </SafeAreaView>
        
    );
};


const style = StyleSheet.create({
    chartContainer: {
        width: "46%",
        height: "100%",
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8dabbd'
    },

    chartContainer2: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8dabbd',
    },

    refresh: {
        width: 20,
        height: 20,
    },

    refreshContainer: {
        width: 40,
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8dabbd'
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#5f8db0',
    },
    buttonContainer: {
        width: 274,
        alignItems: 'center',
        backgroundColor: '#6e7f80',
        paddingVertical: 15,
        borderRadius: 8,
        borderColor: '#536878',
        borderWidth: 4,
    },
    loginContainer: {
        width: 340,
        height: 240,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 12,
        borderColor: '#536bcd',
        borderWidth: 4,
    },
    logo: {
        width: 300,
        height: 100,
    },
    buttonText: {
        height: 18,
        width: 274,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#36454f',
    },
    formContainer: {
        padding: 20,
    },
    input: {
        height: 40,
        width: '84%',
        backgroundColor: '#0088c9',
        marginBottom: 10,
        padding: 10,
        color: '#fffddd',
        fontSize: 20,
        fontWeight: '600',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#49c3b1'
    },
    loginButton: {
        backgroundColor: '#2980b6',
        color: '#fff',
    },
});