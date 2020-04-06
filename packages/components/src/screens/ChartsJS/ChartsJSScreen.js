import React, {useState} from "react";

import "react-tabs/style/react-tabs.css";
import { TabList, Tab, Tabs } from "react-tabs";

import { Image } from "react-native";
import ChartsJSBar from "./ChartsJSBar";
import ChartsJSLine from "./ChartsJSLine";
import ChartsJSPie from "./ChartJSPie";
import ChartsJSBubble from "./ChartJSBubble";

export default function ChartsJS(props) {
  const [selectedIdx, setSelectedIdx] = useState(0)

  const RenderScreen = () => {
    switch (selectedIdx) {
      case 0: return <ChartsJSBar />;
      case 1: return <ChartsJSLine />;
      case 2: return <ChartsJSPie />;
      case 3: return <ChartsJSBubble />;
      default: return null;
    }
  }

    return (
      <>
        <div style={{ backgroundColor: "white" }}>
          <Tabs onSelect={index => setSelectedIdx(index)}>
            <TabList>
              <Tab>
                <Image
                  source={require("../../assets/img/icon-bar-chart.png")}
                  style={{ height: 24, width: 24, tintColor: "black" }}
                />
                Bar Chart
              </Tab>
              <Tab>
                <Image
                  source={require("../../assets/img/icon-line-chart.png")}
                  style={{ height: 24, width: 24, tintColor: "black" }}
                />
                Line Chart
              </Tab>
              <Tab>
                <Image
                  source={require("../../assets/img/donut-chart.png")}
                  style={{ height: 24, width: 24, tintColor: "black" }}
                />
                Pie Chart
              </Tab>
              <Tab>
                <Image
                  source={require("../../assets/img/icon-bubble.png")}
                  style={{ height: 24, width: 24, tintColor: "black" }}
                />
                Bubble Chart
              </Tab>
            </TabList>
          </Tabs>
        </div>

        <RenderScreen />
      </>
    );
}