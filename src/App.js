import React from 'react';
import BarChartInterface from './interfaces/BarChartInterface'
import LineChartInterface from './interfaces/LineChartInterface'
import AreaChartInterface from './interfaces/AreaChartInterface'

// import useScript from './hooks/useScript';
// import DropdownMenu from './dropdown'
// import Style from './style'
// import {ChartProvider, SetStyle, BarChart} from './react-d3'
// const d3 = require('d3');


function App(props) {

  if (props.chart === 'barchart'){
    // return (<></>)
    // debugger;
    return  <BarChartInterface {...props} />
  }else if (props.chart === 'linechart'){
     // return (<></>)
    return( <LineChartInterface {...props} /> )
  }else if (props.chart === 'areachart'){
     // return (<></>)
    return( <AreaChartInterface {...props} /> )
  }

}



export default App;
