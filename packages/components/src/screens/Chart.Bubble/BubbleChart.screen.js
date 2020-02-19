import React from 'react';
import { View, Text } from 'react-native';

import {useState} from 'react';
import * as shape from 'd3-shape'
import * as d3 from 'd3'

function BubbleChart(props) {
    const [data, setData] = useState([])
    const [width, setWidth] = useState(400)
    const [height, setHeight] = useState(300)
    const [minValue, setMinValue] = useState(1)
    const [maxValue, setMaxValue] = useState(100)

    radiusScale = value => {
        const result = d3
            .scaleSqrt()
            .range([1,50])
            .domain([minValue, maxValue])

        return result(value)
    }

    simulatePositions = data => {
        this.simulation = d3
            .forceSimulation()
            .nodes(data)
            .velocityDecay(0.5)
            .force("x", d3.forceX().strength(0.05))
            .force("y", d3.forceY().strength(0.05))
            .force(
                "collide",
                d3.forceCollide(d => {
                    return this.radiusScale(d.v) + 2;
                })
            )
            .on("tick", () => {
                if (this.mounted) {
                    this.setState({ data });
                }
            });
    };
    
    return (
        <View style={{ width: width, height: height, backgroundColor: 'red' }}>

        </View>
    );
}


export default function BubbleChartScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: '#23315f', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Bubble Chart</Text>
            <BubbleChart />
        </View>
    );
};