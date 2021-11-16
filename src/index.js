import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let charts = document.getElementsByClassName('charts');


// For each chart, render accordingly
[].forEach.call(charts, function (chart){
      // let opts = chart.dataset

      let opts = Object.assign({}, chart.dataset)
      opts.xIsDate === 'true' ? opts.xIsDate = true : opts.xIsDate = false
      opts.normalize === 'true' ? opts.normalize = true : opts.normalize = false
      opts.displayYAxis === 'true' ? opts.displayYAxis = true : opts.displayYAxis = false
      opts.dropdownMenu === 'true' ? opts.dropdownMenu = true : opts.dropdownMenu = false



      opts.circleRadius = +opts.circleRadius
      opts.yAxisLabelOffset = +opts.yAxisLabelOffset
      opts.xAxisLabelOffset = +opts.xAxisLabelOffset
      opts.strokeWidth = +opts.strokeWidth
      opts.YGrid = +opts.YGrid
      opts.YAxis = +opts.YAxis
      opts.height = +opts.height



      // debugger;
      ReactDOM.render(
        <App {...opts} />,chart
      )
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
