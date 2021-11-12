import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let charts = document.getElementsByClassName('charts');

// For each chart, render accordingly
[].forEach.call(charts, function (chart){
    if (chart.getAttribute('data-chart') === 'barchart'){
      ReactDOM.render(
        <App
            chart={chart.getAttribute('data-chart')}
            titulo={chart.getAttribute('data-titulo')}
            style={chart.getAttribute('data-style')}
            api={chart.getAttribute('data-api')}
            yAxisLabel={chart.getAttribute('data-yAxisLabel')}
            xAxisLabel={chart.getAttribute('data-xAxisLabel')}

            xAxisLabelOffset={parseInt(chart.getAttribute('data-xAxisLabelOffset'))}
            yAxisLabelOffset={parseInt(chart.getAttribute('data-yAxisLabelOffset'))}
            xIsDate={chart.getAttribute('data-xIsDate') === 'true'}
            svgLegend_x={chart.getAttribute('data-svgLegend_x')}
            svgLegend_y={parseInt(chart.getAttribute('data-svgLegend_y'))}
            svgChartWidth={chart.getAttribute('data-svgChartWidth')}
            styles={chart.getAttribute('data-styles')}

            svgChartHeight={chart.getAttribute('data-svgChartHeight')}

            viewBoxObjectHeight={parseInt(chart.getAttribute('data-viewBoxObjectHeight'))}
            viewBoxObjectWidth={parseInt(chart.getAttribute('data-viewBoxObjectWidth'))}

            translateTickLabel_Y_X={parseInt(chart.getAttribute('data-translateTickLabel_Y_X'))}
            translateTickLabel_Y_Y={parseInt(chart.getAttribute('data-translateTickLabel_Y_Y'))}
            translateTickLabel_X_X={parseInt(chart.getAttribute('data-translateTickLabel_X_X'))}
            translateTickLabel_X_Y={parseInt(chart.getAttribute('data-translateTickLabel_X_Y'))}

            inputDataLayout={chart.getAttribute('data-inputDataLayout')}
            xTickFormat={chart.getAttribute('data-xTickFormat')}

        />, chart
      )
    }

    if (chart.getAttribute('data-chart') === 'linechart'){
      ReactDOM.render(
        <App
            chart={chart.getAttribute('data-chart')}
            titulo={chart.getAttribute('data-titulo')}
            style={chart.getAttribute('data-style')}
            api={chart.getAttribute('data-api')}
            yAxisLabel={chart.getAttribute('data-yAxisLabel')}
            xAxisLabel={chart.getAttribute('data-xAxisLabel')}

            xAxisLabelOffset={parseInt(chart.getAttribute('data-xAxisLabelOffset'))}
            yAxisLabelOffset={parseInt(chart.getAttribute('data-yAxisLabelOffset'))}
            xIsDate={chart.getAttribute('data-xIsDate') === 'true'}
            svgLegend_x={chart.getAttribute('data-svgLegend_x')}
            svgLegend_y={parseInt(chart.getAttribute('data-svgLegend_y'))}
            svgChartWidth={chart.getAttribute('data-svgChartWidth')}
            styles={chart.getAttribute('data-styles')}

            svgChartHeight={chart.getAttribute('data-svgChartHeight')}

            viewBoxObjectHeight={parseInt(chart.getAttribute('data-viewBoxObjectHeight'))}
            viewBoxObjectWidth={parseInt(chart.getAttribute('data-viewBoxObjectWidth'))}

            translateTickLabel_Y_X={parseInt(chart.getAttribute('data-translateTickLabel_Y_X'))}
            translateTickLabel_Y_Y={parseInt(chart.getAttribute('data-translateTickLabel_Y_Y'))}
            translateTickLabel_X_X={parseInt(chart.getAttribute('data-translateTickLabel_X_X'))}
            translateTickLabel_X_Y={parseInt(chart.getAttribute('data-translateTickLabel_X_Y'))}

            inputDataLayout={chart.getAttribute('data-inputDataLayout')}

            lineStrokeWidth={chart.getAttribute('data-lineStrokeWidth')}
            circleRadius={chart.getAttribute('data-circleRadius')}
            xTickFormat={chart.getAttribute('data-xTickFormat')}
            voronoiStroke={chart.getAttribute('data-voronoiStroke')}
            gridTextRotateBottom={chart.getAttribute('data-gridTextRotateBottom')}

        />, chart
      )
    }



});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
