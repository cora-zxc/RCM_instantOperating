import React from 'react';
import './index.css';
import { Column } from '@ant-design/charts';
import { Area } from "@ant-design/charts";

const DemoColumn: React.FC = () => {
  var data = [
    {
      date: '05-30',
      value: 82,
    },
    {
      date: '05-31',
      value: 74,
    },
    {
      date: '06-01',
      value: 70,
    },
    {
      date: '06-02',
      value: 78,
    },
    {
      date: '06-03',
      value: 88,
    },
    {
      date: '06-04',
      value: 90,
    },
    {
      date: '06-05',
      value: 83,
    },
    {
      date: '06-06',
      value: 70,
    },
    {
      date: '06-07',
      value: 89,
    },
    {
      date: '06-08',
      value: 96,
    }
  ];
  var config = {
    data: data,
    xField: 'date',
    yField: 'value',
    label: {
      position: 'middle',
      style: {
        fill: '#ffffff',
        opacity: 0.7
      },
    },
    meta: {
      date: { alias: 'date' },
      value: { min: 0, max: 100 },
    },
    tooltip: true,
    columnWidthRatio: 0.5,
  };
  return <Column {...config} />;
};
const DemoArea: React.FC = () => {
  var areainfo = [
    {
      date: '05-30',
      value: 82,
    },
    {
      date: '05-31',
      value: 74,
    },
    {
      date: '06-01',
      value: 70,
    },
    {
      date: '06-02',
      value: 78,
    },
    {
      date: '06-03',
      value: 88,
    },
    {
      date: '06-04',
      value: 90,
    },
    {
      date: '06-05',
      value: 83,
    },
    {
      date: '06-06',
      value: 70,
    },
    {
      date: '06-07',
      value: 89,
    },
    {
      date: '06-08',
      value: 96,
    }
  ]
  var config = {
    data: areainfo,
    xField: "date",
    yField: "value",
    areaStyle: { fillOpacity: 0.7 },
    appendPadding: 10,
    isPercent: false,
    tooltip: true,
    yAxis: {
      label: {
        formatter: function formatter(value) {
            return value;
        }
      }
    }
  };
  return <Area {...config} />;
};
  
class MyBar extends React.Component {
  constructor(props){
    super(props);
    this.title=["近期設備稼動率分析","近期設備用時分析"];
  }
  render() {
    return (
    <div id="bar">
      <div>
        <div>{this.title[0]}</div>
        <div><DemoColumn /></div>
      </div>
      <div>
        <div>{this.title[1]}</div>
        <div><DemoArea /></div>
      </div>
    </div>
    );
  }
}
export default MyBar