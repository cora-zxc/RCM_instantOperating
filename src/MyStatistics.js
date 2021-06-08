import React from 'react';
import './index.css';

class MyStatistics extends React.Component {
    constructor(props){
        super(props);
        this.title=["總設備","運行中","關機中","報警中","停機中"];
        this.backgroundColor=["#2fb6b5","#41e16c","#f62526","#f1d326","#9a9a9a"];
    }
    render() {
        return (
        <div id="statistics">
            <div>
                <div style={{backgroundColor:this.backgroundColor[0]}}>{this.title[0]}</div>
                <div>{this.props.totalequip}</div>
            </div>
            <div>
                <div style={{backgroundColor:this.backgroundColor[1]}}>{this.title[1]}</div>
                <div>{this.props.running}</div>
            </div>
            <div>
                <div style={{backgroundColor:this.backgroundColor[2]}}>{this.title[2]}</div>
                <div>{this.props.shuttingdown}</div>
            </div>
            <div>
                <div style={{backgroundColor:this.backgroundColor[3]}}>{this.title[3]}</div>
                <div>{this.props.alerting}</div>
            </div>
            <div>
                <div style={{backgroundColor:this.backgroundColor[4]}}>{this.title[4]}</div>
                <div>{this.props.stopping}</div>
            </div>
        </div>
        );
    }
}
export default MyStatistics