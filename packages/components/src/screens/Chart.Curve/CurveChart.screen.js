import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import Button from '../../views/Button';
import { getNavigation } from '../../router/Router';

export default function CurveChartScreen() {
    const navigation = getNavigation()
    const [data, setData] = useState([50, 10, 40, 190, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80])
    const [data2, setData2] = useState([50, 10, 40, 190, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80])
    const [second, setSecond] = useState([50, 10, 40, 195, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80].reverse())

    const onPie = () => {
        navigation.push('pieChart')
    }

    const onBar = () => {
        navigation.push('barChart')
    }

    const onRefresh = () => {
        var aNewState = []
        for (var i = 0; i < data.length; i++) {
            aNewState.push(Math.floor(Math.random() * 100) + 1)
        }
        setData2(aNewState)
        setData(data.reverse())
        setSecond(data)
    }

    const RenderFooter = () => {
        if (Platform.OS == 'web') {
            return (
                <View style={{ marginTop: '56%', width: '100%', position: 'absolute', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <View style={{ width: '80%', height: '8%', backgroundColor: '#b25900', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
                        <Button style={{ maxWidth: '24%', height: '70%' }} onPress={onBar}>BAR</Button>
                        <Button style={{ maxWidth: '24%', height: '70%' }} selected>CURVE</Button>
                        <Button style={{ maxWidth: '24%', height: '70%' }} onPress={onPie}>PIE</Button>
                    </View>
                </View>
            )
        } else {
            return null
        }
    }
    const aTopMargin = Platform.OS == 'web' ? '6%' : '16%'
    const aBottomMargin = Platform.OS == 'web' ? '54%' : '-10%'
    return (
        <>
            <View style={{ marginTop: aTopMargin, marginBottom: aBottomMargin, justifyContent: 'center', alignItems: 'center', width: '100%', height: '60%' }}>

                <AreaChart style={{ width: '90%', height: '40%' }}
                               data={data}
                               svg={{ fill: 'rgba(134, 65, 244, 0.5)' }}

                               curve={shape.curveNatural}


                    >
                        <Grid />
                    </AreaChart>
                    <AreaChart style={{ width: '90%', height: '30%' }}
                                data={second}
                               svg={{ fill: 'rgba(34, 128, 176, 0.5)' }}
                        curve={shape.curveMonotoneY}

                    />


                <Button style={{ width: '40%', backgroundColor: '#086c34' }} onPress={onRefresh}> refresh </Button>

                <AreaChart style={{ width: '90%', height: '30%'}}
                    data={data2}
                    svg={{ fill: 'green' }}
                    curve={shape.curveStepAfter}
                >
                    <Grid />
                </AreaChart>
                
        </View>
        <RenderFooter />
        </>
    );
};