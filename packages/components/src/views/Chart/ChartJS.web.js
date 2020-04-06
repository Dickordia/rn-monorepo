import React, { useEffect, useState } from "react";
import Chart from "chart.js";
import ReactDOM from "react-dom";

const ChartJSFunc = React.forwardRef((props, ref) => {
        let canvasRef = React.createRef();
        const [chart, setChart] = useState(null);

        useEffect(() => {
          if (chart == null) {
            setChart(
              new Chart(canvasRef.current, {
                type: props.type,
                data: JSON.parse(props.data),
                options: props.options
              })
            );
          } else {
            if (props.data) {
                const aData = JSON.parse(props.data);
                chart.data.labels = aData.labels;
                chart.data.datasets[0].data = aData.datasets[0].data;
                chart.update();
            }
          }
        });

        return <canvas ref={canvasRef} />;
})

export default class ChartJS extends React.Component {
  constructor(props) {
        super(props);

        this.state = { chartData: props.data };
        this.chart = React.createRef();
    }

    reload(data) {
      this.setState({ chartData: data });
    }

    render() {
        return (
          <ChartJSFunc ref={this.chart} type={this.props.type} data={this.state.chartData} options={this.props.options} />
        );
    }
}