import React, { useState, useEffect } from 'react';
// import useScript from './hooks/useScript';



import DropdownMenu from './dropdown'
import Style from './style'
import {ChartProvider, SetStyle, BarChart} from './react-d3'

const d3 = require('d3');


function App(props) {
  // From index.html

  // Texts
  const [titulo, setTitulo] = useState(props.titulo);
  const [xAxisLabel, setXAxisLabel] = useState(props.xAxisLabel);
  const [yAxisLabel, setYAxisLabel] = useState(props.yAxisLabel);

  // Position

  const [svgLegend_x, setSvgLegend_x] = useState(props.svgLegend_x);
  const [svgLegend_y, setSvgLegend_y] = useState(props.svgLegend_y);

  const [xAxisLabelOffset, setXAxisLabelOffset] = useState(props.xAxisLabelOffset);
  const [yAxisLabelOffset, setYAxisLabelOffset] = useState(props.yAxisLabelOffset);
  const [xIsDate, setXIsDate] = useState(props.xIsDate);
  const [svgChartWidth, setsvgChartWidth] = useState(props.svgChartWidth);
  const [svgChartHeight, setSvgChartHeight] = useState(props.svgChartHeight);

  const svgLegend = {position:{x:props.svgLegend_x,y:props.svgLegend_y}}
  const svgChart = {width:props.svgChartWidth}
  svgChart['height'] = props.svgChartHeight

  const [translateTickLabel_Y_X, setTranslateTickLabel_Y_X] = useState(props.translateTickLabel_Y_X);
  const [translateTickLabel_Y_Y, setTranslateTickLabel_Y_Y] = useState(props.translateTickLabel_Y_Y);
  const [translateTickLabel_X_X, setTranslateTickLabel_X_X] = useState(props.translateTickLabel_X_X);
  const [translateTickLabel_X_Y, setTranslateTickLabel_X_Y] = useState(props.translateTickLabel_X_Y);


  // debugger;

  // Style
  const [style, setStyle] = useState(props.style);
  const [styles, setStyles] = useState(props.styles);
  const [color, setColor] = useState({});
  const [background, setBackground] = useState('darkcyan');

  const [viewBoxObjectHeight, setViewBoxObjectHeight] = useState(props.viewBoxObjectHeight);
  const [viewBoxObjectWidth, setViewBoxObjectWidth] = useState(props.viewBoxObjectWidth);

  // API x Data
  const [api, setApi] = useState(props.api);
  const [barData, setBarData] = useState([]);
  useEffect(function effectFunction() {
      async function fetchData() {
          return await Promise.resolve(d3.csv(api))
      }
      fetchData().then(response => setBarData(response));
  }, []);

  const viewBoxObject = {
      x: 0,
      y: 0,
      height: props.viewBoxObjectHeight,
      width: props.viewBoxObjectWidth,
  }

  return (
    <ChartProvider>
    <div style={{background: "#FFFFFF"}}>
          <BarChart
              legend={true}
              data={barData}
              xIsDate={xIsDate}
              grouped={true}
              width="100%"
              height="100%"
              viewBoxObject={viewBoxObject}
              title={titulo}
              gridHorizontal={true}
              gridVertical={true}
              color={color}
              margins={{ top: 52, right: 20, bottom: 110, left: 100 }}
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

              xAxisLabelOffset={xAxisLabelOffset}
              yAxisLabelOffset={yAxisLabelOffset}

              xAxisLabel={xAxisLabel}
              yAxisLabel={yAxisLabel}

              svgLegend={svgLegend}

              background={background}

              svgTitle={{
                        title:{titulo},
                        x:'50%',
                        y:24,
                        fontSize:'2.3em',
                      }}
              svgChart={svgChart}
              translateTickLabel_Y_X={translateTickLabel_Y_X}
              translateTickLabel_Y_Y={translateTickLabel_Y_Y}
              translateTickLabel_X_X={translateTickLabel_X_X}
              translateTickLabel_X_Y={translateTickLabel_X_Y}
          />
          <SetStyle style={style}/>


          <Style
            styles={styles}
            style={style}
            setColor={setColor}
            setBackground={setBackground}
          />

          <DropdownMenu
            styles={styles}
            style={style}
            setStyle={setStyle}
          />

    </div>
    </ChartProvider>
  );



}



export default App;
