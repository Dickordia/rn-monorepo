import React from 'react';
import { View, Text, Platform } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts'

import Button from '../../views/Button';
import { getNavigation } from '../../router/Router';


export default function BarChartScreen() {
    const navigation = getNavigation()

    const data1 = [14, -1, 100, -95, -94, -24, -8, 85, -91, 35, -53, 53, -78, 66, 96, 33, -26, -32, 73, 8]
        .map((value) => ({ value }))
    const data2 = [24, 28, 93, 77, -42, -62, 52, -87, 21, 53, -78, -62, -72, -6, 89, -70, -94, 10, 86, 84]
        .map((value) => ({ value }))

    const barData = [
        {
            data: data1,
            svg: {
                fill: 'rgb(134, 65, 244)',
            },
        },
        {
            data: data2,
        },
    ]

    const onPie = () => {
        navigation.push('pieChart')
    }

    const onCurve = () => {
        navigation.push('curveChart')
    }

    const RenderFooter = () => {
        if (Platform.OS == 'web') {
            return (
                <View style={{ marginTop: '56%', width: '100%', position: 'absolute', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <View style={{ width: '80%', height: '8%', backgroundColor: '#b25900', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
                        <Button style={{ maxWidth: '24%', height: '70%' }} selected>BAR</Button>
                        <Button style={{ maxWidth: '24%', height: '70%' }} onPress={onCurve}>CURVE</Button>
                        <Button style={{ maxWidth: '24%', height: '70%' }} onPress={onPie}>PIE</Button>
                    </View>
                </View>
            )
        } else {
            return null
        }
    }

    return (
        <>
        <View style={{ flex: 1, backgroundColor: '#23315f', alignItems: 'center', justifyContent: 'center' }}>
            <BarChart
                style={{ height: '70%' , width: '90%'}}
                data={barData}
                yAccessor={({ item }) => item.value}
                svg={{
                    fill: 'green',
                }}
                contentInset={{ top: 30, bottom: 30 }}
            >
                    <Grid style={{ width: '90%' }}/>
            </BarChart>
            </View >
        <RenderFooter />
        </>
    );
};