import React, {useState} from 'react';
import { View, Platform } from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import { Circle, G, Line, Text } from 'react-native-svg'
import Button from '../../views/Button';
import { getNavigation } from '../../router/Router';

export default function PieChartScreen() {
    const navigation = getNavigation()
    const [data, setData] = useState([50, 10, 40, 95, -4, -24, 85, 91])

    const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)
    

    const pieData = data
        .filter(value => value > 0)
        .map((value, index) => ({
            value,
            svg: { fill: randomColor() },
            key: `pie-${index}`,
            onPressOut: () => {console.log(index)}
        }))


    const Labels = ({ slices, height, width }) => {
        return slices.map((slice, index) => {
            const { labelCentroid, pieCentroid, data } = slice;
            return (
                <G key={index}>
                    <Line
                        x1={labelCentroid[0]}
                        y1={labelCentroid[1]}
                        x2={pieCentroid[0]}
                        y2={pieCentroid[1]}
                        stroke={data.svg.fill}
                    />
                    <Circle
                        cx={labelCentroid[0]}
                        cy={labelCentroid[1]}
                        r={20}
                        fill={data.svg.fill}
                        onPress={onTap}
                    />
                    <Text
                        x={labelCentroid[0]}
                        y={labelCentroid[1]}
                        fill={'black'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={24}
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                        {data.value}
                    </Text>
                </G>
            )
        })
    }

    const onCurve = () => {
        navigation.push('curveChart')
    }

    const onBar = () => {
        navigation.push('barChart')
    }

    const RenderFooter = () => {
        if (Platform.OS == 'web') {
            return (
                <View style={{ marginTop: '56%', width: '100%', position: 'absolute', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <View style={{ width: '80%', height: '8%', backgroundColor: '#b25900', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
                        <Button style={{ maxWidth: '24%', height: '70%' }} onPress={onBar}>BAR</Button>
                        <Button style={{ maxWidth: '24%', height: '70%' }} onPress={onCurve} >CURVE</Button>
                        <Button style={{ maxWidth: '24%', height: '70%' }} selected>PIE</Button>
                    </View>
                </View>
            )
        } else {
            return null
        }
    }


    const onRefresh = () => {
            var aNewState = []
            for (var i = 0; i < data.length; i++) {
                aNewState.push(Math.floor(Math.random() * 100) + 1)
            }
            setData(aNewState)
    }

    const onRefresh2 = () => {
        setTimeout(() => {
            setData([50, 10, 40, 85, -4, -24, 85, 91])
        }, 500);
    }

    const onTap = (index) => {
        alert('Did tap callout at index ${index}')
    }

    return (
        <>
        <View style={{ flex: 1, backgroundColor: '#23315f', alignItems: 'center', justifyContent: 'center' }}>
            <PieChart
                animate
                animationDuration={1000}
                style={{ height: 340, width: 340 }}
                data={pieData}
                innerRadius={'30%'}
                outerRadius={'60%'}
                labelRadius={'80%'}>
                <Labels />
            </PieChart>
                <Button style={{width: '70%', backgroundColor: '#086c34'}} onPress={onRefresh}> refresh </Button>
        </View>
            <RenderFooter />
        </>
    );
};