import React, { useState, useEffect, useRef } from 'react';
import DropdownMenu from '../dropdown'
import Style from '../style'
import windowDimensions from '../utils/windowDimensions'
// import {ChartProvider, SetStyle, LineChart} from '../react-d3'

import {ChartProvider, SetStyle, Treemap} from 'rd3'

const d3 = require('d3');


function TreeMapInterface(props) {
  // Style states
  const [style, setStyle] = useState(props.style);
  const [color, setColor] = useState({});
  const [background, setBackground] = useState('darkcyan');

  // API - Data state
  const [treemapData, setTreemapData] = useState([]);
  useEffect(function effectFunction() {
      async function fetchData() {
          return await Promise.resolve(d3.json(props.api))
      }
      fetchData().then(response => setTreemapData(response));
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

    const windowHeight = windowDimensions().height;
    const windowWidth = windowDimensions().width;
    const [width, setWidth] = useState(0)
    const elemRef= useRef(null)

    if (width < 1) {
      /**
       * We know this alter the state, so a re-render will happen
       */
      setWidth('100')
    }
    useEffect(() => {
     if(elemRef.current){
         setWidth(elemRef.current.clientWidth)
     }
   })



  return (
    <ChartProvider>
    <div style={{background: "#FFFFFF"}} ref={elemRef}>
          <Treemap
            // width={500}
            // height={400}
            width={+width}
            height={windowHeight*.75}
            title="Treemap"
            data={treemapData}
            color={color}
            textColor="#484848"            
            fontColor="12px"
            hoverAnimation={true}
            viewBoxObject={viewBoxObject}
            title={props.titulo}
            // color={color}
            margins={{ top: 72, right: 20, bottom: 0, left: 110 }}
            svgTitle={{
                      title:props.titulo,
                      x:'50%',
                      y:24,
                      fontSize:'2.3em',
                    }}
            svgChart={svgChart}
          />

          <SetStyle style={style + ' ' +  props.chartClass}/>
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
          />
          }


    </div>
    </ChartProvider>
  );
}

export default TreeMapInterface;
