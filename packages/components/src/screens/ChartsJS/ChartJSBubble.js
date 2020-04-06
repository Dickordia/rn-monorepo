import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';

import ChartJS from '../../views/Chart/ChartJS';
import { randomDataBubbleChart } from '../../utils/DataGenerator';

const aOptions = { layout: { padding: { left: 0, right: 0, top: 0, bottom: 30 } } };
const aOpt = JSON.stringify(aOptions);

export default function ChartsJSBubble(props) {
    let chart = React.createRef();

    const [orientation, setOrientation] = useState('')
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

    const aSize = orientation == 'landscape' ? { width: '88%', height: '90%' } :
        { width: '80%', height: '90%' }

    const onRefresh = () => {
        chart.current.reload(randomDataBubbleChart(6));
    }

    return (
        <SafeAreaView style={style.container}>
            <ChartJS ref={chart} type="bubble" data={randomDataBubbleChart(5)} options={aOpt} />

            <View style={style.refreshContainer}>
                <TouchableOpacity activeOpacity={0.5} onPress={onRefresh}>
                    <Image
                        style={style.refresh}
                        source={require('../../assets/img/icon_refresh.png')}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    refresh: {
        width: 20,
        height: 20,
    },

    refreshContainer: {
        width: 40,
        height: 40,
        left: 5,
        bottom: 5,
        position: "absolute",
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8dabbd'
    },
});