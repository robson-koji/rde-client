import React, { useState, useEffect } from 'react';
import DropdownMenu from '../dropdown'
import Style from '../style'
// import {ChartProvider, SetStyle, LineChart} from '../react-d3'

import {ChartProvider, SetStyle, LineChart} from 'rd3'

const d3 = require('d3');


function LineChartInterface(props) {
  // Style states
  const [style, setStyle] = useState(props.style);
  const [color, setColor] = useState({});
  const [background, setBackground] = useState('darkcyan');

  // API - Data state
  const [lineData, setLineData] = useState([]);
  useEffect(function effectFunction() {
      async function fetchData() {
          return await Promise.resolve(d3.csv(props.api))
      }
      fetchData().then(response => setLineData(response));
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

  return (
    <ChartProvider>
    <div style={{background: "#FFFFFF"}}>
          <LineChart
              chart={props.chart}
              legend={true}
              data={lineData}
              inputDataLayout={props.inputDataLayout}
              xIsDate={props.xIsDate}
              grouped={true}
              width="100%"
              height="100%"
              viewBoxObject={viewBoxObject}
              title={props.titulo}
              gridHorizontal={true}
              gridVertical={true}
              color={color}
              margins={{ top: 72, right: 20, bottom: 110, left: 110 }}
              yAxisTickCount={10}
              xTickFormat={props.xTickFormat}

              // axisTxtRotate={{top:null,right:null,bottom:"rotate(-65)",left:null}}
              gridText={gridText}
              // gridText={{rotate:{bottom:"rotate(-65)"},
              //            translate:{text:{
              //                         x:-26,
              //                         y:33
              //                       }},
              //             font:{size:'0.8em',
              //                   weight:'0.3'
              //                 }
              //           }}

              xAxisLabelOffset={props.xAxisLabelOffset}
              yAxisLabelOffset={props.yAxisLabelOffset}

              xAxisLabel={props.xAxisLabel}
              yAxisLabel={props.yAxisLabel}
              voronoiStroke={props.voronoiStroke}

              svgLegend={svgLegend}

              background={background}

              svgTitle={{
                        title:props.titulo,
                        x:'50%',
                        y:24,
                        fontSize:'2.3em',
                      }}
              svgChart={svgChart}
              translateTickLabel_Y_X={props.translateTickLabel_Y_X}
              translateTickLabel_Y_Y={props.translateTickLabel_Y_Y}
              translateTickLabel_X_X={props.translateTickLabel_X_X}
              translateTickLabel_X_Y={props.translateTickLabel_X_Y}
              strokeWidth={props.lineStrokeWidth}

              circleRadius={props.circleRadius}
          />
          <SetStyle style={style}/>

          <Style
            styles={props.styles}
            style={style}
            setColor={setColor}
            setBackground={setBackground}
          />

          <DropdownMenu
            styles={props.styles}
            style={style}
            setStyle={setStyle}
          />

    </div>
    </ChartProvider>
  );
}

export default LineChartInterface;
