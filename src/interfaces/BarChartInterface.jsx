import React, { useState, useEffect } from 'react';
import DropdownMenu from '../dropdown'
import Style from '../style'
import {ChartProvider, SetStyle, BarChart} from 'rd3'


const d3 = require('d3');



const BarChartInterface = (props) => {
  // Style states
  const [style, setStyle] = useState(props.style);
  const [color, setColor] = useState({});
  const [background, setBackground] = useState('darkcyan');

  // API - Data state
  const [barData, setBarData] = useState([]);
  useEffect(function effectFunction() {
      async function fetchData() {
          return await Promise.resolve(d3.csv(props.api))
      }
      fetchData().then(response => setBarData(response));
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

  // Promise.resolve(d3.csv(props.api)).then((aaa) => console.log(aaa))
  //
  // console.log(props)
  // debugger;

  // <div style={{background: "#FFFFFF", "border-width": "1px", border: "groove"}}>
  return (
    <ChartProvider>
    <div style={{background: "#FFFFFF"}}>

          <BarChart
              chart={props.chart}
              legend={true}
              data={barData}
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
              margins={{ top: 52, right: 20, bottom: 110, left: 110 }}
              yAxisTickCount={10}

              // axisTxtRotate={{top:null,right:null,bottom:"rotate(-65)",left:null}}
              gridText={{rotate:{bottom:"rotate(-65)"},
                         translate:{text:{
                                      x:-26,
                                      y:33
                                    }},
                          font:{size:'0.8em',
                                weight:'0.3'
                              }
                        }}

              xAxisLabelOffset={props.xAxisLabelOffset}
              yAxisLabelOffset={props.yAxisLabelOffset}

              xAxisLabel={props.xAxisLabel}
              yAxisLabel={props.yAxisLabel}

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
          />
          <SetStyle style={style + ' ' + props.chartClass}/>

          <Style
            styles={props.styles}
            style={style}
            setColor={setColor}
            setBackground={setBackground}
          />

          { props.dropdownMenu && <DropdownMenu
            styles={props.styles}
            style={style}
            setStyle={setStyle}
          />}

    </div>
    </ChartProvider>
  );
}

BarChartInterface.defaultProps = {
  dropdownMenu:true
}

export default BarChartInterface;
