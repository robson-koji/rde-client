import React, { useState, useEffect } from 'react';
import DropdownMenu from '../dropdown'
import Style from '../style'
// import {ChartProvider, SetStyle, LineChart} from '../react-d3'

import {ChartProvider, SetStyle, AreaChart} from 'rd3'

const d3 = require('d3');


function AreaChartInterface(props) {

  debugger;
  // Style states
  const [style, setStyle] = useState(props.style);
  const [color, setColor] = useState({});
  const [background, setBackground] = useState('darkcyan');

  // API - Data state
  const [areaData, setAreaData] = useState([]);
  useEffect(function effectFunction() {
      async function fetchData() {
          return await Promise.resolve(d3.csv(props.api))
      }
      fetchData().then(response => setAreaData(response));
  }, []);

  // Positioning
  const svgLegend = {position:{x:props.svgLegend_x,y:props.svgLegend_y}}
  const svgChart = {width:props.svgChartWidth}
  svgChart['height'] = props.svgChartHeight

  const viewBoxObject = {
      x: 0,
      y: 0,
      height: props.viewBoxObjectHeight,
      width: props.viewBoxObjectWidth,
  }



    const gridTextRotateBottom = props.gridTextRotateBottom || -65;
    const gridText = {
        rotate:{
            bottom:"rotate(" + gridTextRotateBottom + ")"
          },
          translate:{
            text:{
                x:0,
                y:10
                }
            },
            font:{
              size:'0.8em',
              weight:'0.3'
            }
          }

  // console.log(props.xTickFormat)
  // debugger;

  return ( 'aaaaa'
  );
}

export default AreaChartInterface;
