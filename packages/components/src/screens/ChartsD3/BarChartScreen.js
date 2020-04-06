import React, {useState} from 'react';
import { View } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts'


export default function BarChartScreen(props) {
    const [layout, setLayout] = useState({ width: 0, height: 0 })
    
    const barData = [
        {
            data: props.data[0].map((value) => ({ value })),
            svg: {fill: '#e94a2f'},
        },
        {
            data: props.data[1].map((value) => ({ value })),
        },
    ]

    const _onLayout = event => {
        setLayout({
            width: event.nativeEvent.layout.width,
            height: event.nativeEvent.layout.height
        })
    }
    
    let aHeight = layout.height * 0.7
    let aWidth = layout.width * 0.9
    
    return (
        <View style={{ flex: 1, width: '100%', height: "100%", alignItems: 'center', justifyContent: 'center' }} onLayout={_onLayout}>
            <BarChart
                spacingInner={0.3}
                style={{ height: aHeight, width: aWidth }}
                data={barData}
                yAccessor={({ item }) => item.value}
                svg={{
                    fill: '#2f71e9',
                }}

            >
                <Grid style={{ width: '96%' }} />
            </BarChart>
        </View >
    );
};