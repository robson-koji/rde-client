import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let charts = document.getElementsByClassName('charts');

[].forEach.call(charts, function (chart){
   ReactDOM.render(
     <App
        titulo={chart.getAttribute('data-titulo')}
        style={chart.getAttribute('data-style')}
        api={chart.getAttribute('data-api')}

        yAxisLabel={chart.getAttribute('data-yAxisLabel')}
        xAxisLabel={chart.getAttribute('data-xAxisLabel')}

        xAxisLabelOffset={chart.getAttribute('data-xAxisLabelOffset')}
        yAxisLabelOffset={chart.getAttribute('data-yAxisLabelOffset')}
        xIsDate={chart.getAttribute('data-xIsDate')}
        svgLegend_x={chart.getAttribute('data-svgLegend_x')}
        svgLegend_y={chart.getAttribute('data-svgLegend_y')}
        svgChartWidht={chart.getAttribute('data-svgChartWidht')}
        styles={chart.getAttribute('data-styles')}
    />,
     chart
)});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
