import React, { useState, useEffect } from 'react';
// import useScript from './hooks/useScript';



import DropdownMenu from './dropdown'
import Style from './style'
import {ChartProvider, SetStyle, BarChart} from './react-d3'

const d3 = require('d3');
const ReactDOM = require('react-dom');

// const rd3 = require('rd3');
// const BarChart = rd3.BarChart;



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
  const [svgChartWidht, setSvgChartWidht] = useState(props.svgChartWidht);


  const svgLegend = {position:{x:props.svgLegend_x,y:props.svgLegend_y}}
  const svgChart = {width:props.svgChartWidht}
  // debugger;

  // Style
  const [style, setStyle] = useState(props.style);
  const [styles, setStyles] = useState(props.styles);
  const [color, setColor] = useState({});
  const [background, setBackground] = useState('darkcyan');


  // API x Data
  const [api, setApi] = useState(props.api);
  const [barData, setBarData] = useState([]);
  useEffect(function effectFunction() {
      async function fetchData() {
          return await Promise.resolve(d3.csv(api))
      }
      fetchData().then(response => setBarData(response));
  }, []);


  return (
    <ChartProvider>
    <div>
          <BarChart
              legend={true}
              data={barData}
              xIsDate={xIsDate}
              grouped={true}
              width="100%"
              height="100%"
              viewBoxObject={{
                x: 0,
                y: 0,
                width: 1200,
                height: 500,
              }}
              domain={{ x: [, ], y: [, ] }}
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
