import React, { useState } from 'react';
import { View } from 'react-native';

import { PieChart } from 'react-native-svg-charts'
import { Circle, G, Line, Text } from 'react-native-svg'

export default function PieChartScreen(props) {
    const [layout, setLayout] = useState({width: 0, height: 0})

    const aColors = ['#ff0000', '#1b9591', '#ffd700', '#2f71e9', '#a72fe9','#8b0000']

    const pieData = props.data.filter(value => value > 0)
        .map((value, index) => ({
            value,
            svg: { fill: aColors[index],
                onPress: () => alert(`Did tap slice at index ${index} with value ${value}`)
                 },
            key: `pie-${index}`,
        }))


    const _onLayout = event => {
        setLayout({ width: event.nativeEvent.layout.width,
                    height: event.nativeEvent.layout.height})
    }

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
                        r={"6%"}
                        fill={data.svg.fill}
                        onPress={() => alert(`Did tap callout at index ${index} with value ${data.value}`)}
                    />
                    <Text
                        x={labelCentroid[0]}
                        y={labelCentroid[1]}
                        fill={'black'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={18}
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                        {data.value}
                    </Text>
                </G>
            )
        })
    }

    let aRadius = Math.max(layout.width, layout.height) * 0.98

    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onLayout={_onLayout}>
                <PieChart
                    style={{ height: aRadius, width: aRadius }}
                    data={pieData}
                    innerRadius={'20%'}
                    outerRadius={'54%'}
                    labelRadius={'82%'}>
                    <Labels />
                </PieChart>
            </View>
        </>
    );
};