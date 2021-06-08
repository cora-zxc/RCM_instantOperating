import React from 'react';
import './index.css';
import { Gauge } from '@ant-design/charts';
import { Pie } from '@ant-design/charts';

const DemoGauge1: React.FC = () => {
    var config = {
        innerRadius: 0.5,
        percent: 0.75,
        range: { color: '#3542e6' },
        startAngle: Math.PI,
        endAngle: 2 * Math.PI,
        indicator: null,
        statistic: {
            title: {
                offsetY: 0,
                style: {
                    fontSize: '36px',
                    color: '#4B535E',
                },
                formatter: function formatter() {
                    return '70%';
                },
            },
        },
    };
    return <Gauge {...config} />;
};
const DemoGauge2: React.FC = () => {
    var config = {
        innerRadius: 0.5,
        percent: 0.75,
        range: { color: '#3542e6' },
        startAngle: Math.PI,
        endAngle: 2 * Math.PI,
        indicator: null,
        statistic: {
            title: {
                offsetY: -10,
                style: {
                    fontSize: '36px',
                    color: '#4B535E',
                },
                formatter: function formatter() {
                    return '70%';
                },
            },
        },
    };
    return <Gauge {...config} />;
};  
const DemoPie: React.FC = () => {
    var data = [
        {
          type: '運行',
          value: 80,
        },
        {
          type: '關機',
          value: 6,
        },
        {
          type: '報警',
          value: 2,
        },
        {
          type: '停機',
          value: 6,
        },
        {
          type: '待機',
          value: 12,
        }
      ];
      var config = {
        //新加的
        innerRadius: 0.6,
        statistic: {
            title: false,
            content: {
              formatter: function formatter() {
              },
            },
          },
        tooltip: false, 
        legend: false, 
        //
        appendPadding: 10,
        data: data,
        angleField: 'value',
        colorField: 'type',
        color: ({ type }) => {
          if(type === '運行'){
            return '#41e16c';
          }
          if(type === '關機'){
            return '#f62526';
          }
          if(type === '報警'){
            return '#f1d326';
          }
          if(type === '停機'){
            return '#9a9a9a';
          }
          if(type === '待機'){
            return '#092278';
          };
        },
        radius: 0.9,
        label: {
          type: 'spider',
          labelHeight: 50,
          content: '{name}\n{percentage}',
      },
      interactions: [{ type: 'element-active' }],
    };
    return <Pie {...config} />;
  };

class MyPie extends React.Component {
    render() {
        return (
        <div id="pie">
            <div>
                <div>設備稼動率</div>
                <div><DemoGauge1 /></div>
            </div>
            <div>
                <div>當前機台狀態分析</div>
                <div><DemoPie /></div>
            </div>
            <div>
                <div>設備關機比率</div>
                <div><DemoGauge2 /></div>
            </div>
        </div>
        );
    }
}
export default MyPie