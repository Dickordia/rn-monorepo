import React from 'react';

import { Platform } from 'react-native';
import { WebView } from "react-native-webview";

const isIOS = Platform.OS == 'ios';
const window = isIOS ? 'window' : 'document';

const ChartJSFunc = React.forwardRef((props, ref) => {
  const webSource = `
<body style="background-color: ${props.backgroundcolor};">
    <canvas id="chart" height={window.innerWidth} responsive={true}></canvas>
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

    <script>
        ${window}.addEventListener('resize', resize, false);
            console.log("hi");
        ${window}.addEventListener("message", function (data) {
            chartData = JSON.parse(data.data)
            redraw()
        });

        var chart;
        var chartData = ${props.data};
        var chartOptions = ${props.options};
        var canvas = document.getElementById('chart');

        resize();

        function resize() {
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
            redraw()
        }

        function redraw() {
            if (chart == null) {
                var ctx = canvas.getContext('2d');

                chart = new Chart(ctx, {
                    type: '${props.type}',
                    data: chartData,
                    options: {
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10
            }
        }
    }
                });

            } else {
                chart.data.labels = chartData.labels;
                for (var i = 0; i < chart.data.datasets.length; i++) {
                    chart.data.datasets[i].data = chartData.datasets[i].data;
                    chart.data.datasets[i].backgroundColor = chartData.datasets[i].backgroundColor;
                    chart.data.datasets[i].borderColor = chartData.datasets[i].borderColor;
                }
                chart.update();
            }
        };
    </script>
</body>
`;

  return (
    <WebView
      ref={ref}
      originWhitelist={["*"]}
      source={{ html: webSource }}
      bounces={false}
      scrollEnabled={false}
      scalesPageToFit={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      allowFileAccess
      javaScriptEnabled
      startInLoadingState
      javaScriptEnabledAndroid
    />
  );
});

export default class ChartJS extends React.Component {
    constructor(props) {
        super(props);

        this.chart = React.createRef();
    }

    reload(data) {
        this.chart.current.postMessage(data);
    }

    render() {
        return (
          <ChartJSFunc ref={this.chart} type={this.props.type} data={this.props.data} options={this.props.options} />
        );
    }
}