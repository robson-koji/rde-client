import React, { useState, useEffect } from 'react';
const d3 = require('d3');


const Style = (props) => {
  const style = {magma:
                    {scale:{colors: d3.scaleSequential(d3.interpolateMagma),
                            accessor: 'Sequential'},
                    svgBkgColor:'darkmagenta'
                    },
                  turbo:
                    {scale:{colors: d3.scaleSequential(d3.interpolateTurbo),
                            accessor: 'Sequential'},
                    svgBkgColor:'lavenderblush'
                    },
                  orrd:
                    {scale:{colors: d3.scaleSequential(d3.interpolateOrRd),
                            accessor: 'Sequential'},
                    svgBkgColor:'#FFEBCD'
                    },
                  gnbu:
                    {scale:{colors: d3.scaleSequential(d3.interpolateGnBu),
                            accessor: 'Sequential'},
                    svgBkgColor:'greenyellow'
                    },
                  inferno:
                    {scale:{colors: d3.scaleSequential(d3.interpolateInferno),
                            accessor: 'Sequential'},
                    svgBkgColor:'#000000'
                    },
                  tableau10:
                    {scale:{colors: d3.scaleOrdinal(d3.schemeTableau10),
                            accessor: 'Ordinal'},
                    svgBkgColor:'#FFFFFF'
                    },
                  schemeblues:
                    {scale:{colors: d3.scaleSequential(d3.schemeBlues[9]),
                            accessor: 'Ordinal'},
                    svgBkgColor:'#FFFFFF'
                    },
                  rdbu:
                    {scale:{colors: d3.scaleSequential(d3.interpolateRdBu),
                            accessor: 'Sequential'},
                    svgBkgColor:'#FFFFFF'
                    },
                  spectral:
                    {scale:{colors: d3.scaleSequential(d3.interpolateSpectral),
                            accessor: 'Sequential'},
                    svgBkgColor:'#FFFFFF'
                    },
                  sinebow:
                    {scale:{colors: d3.scaleSequential(d3.interpolateSinebow),
                            accessor: 'Sequential'},
                    svgBkgColor:'#001B8B'
                    },
                    pastel1:
                      {scale:{colors: d3.scaleOrdinal(d3.schemePastel1),
                              accessor: 'Ordinal'},
                      svgBkgColor:'lightsalmon'
                      },

                    schemeset1:
                      {scale:{colors: d3.scaleOrdinal(d3.schemeSet1),
                              accessor: 'Ordinal'},
                      svgBkgColor:'cadetblue'
                      },

                    schemeset3:
                      {scale:{colors: d3.scaleOrdinal(d3.schemeSet3),
                              accessor: 'Ordinal'},
                      svgBkgColor:'#FFFFFF'
                        },

                    pubu:
                      {scale:{colors: d3.scaleOrdinal(d3.schemePuBu[9]),
                              accessor: 'Ordinal'},
                      svgBkgColor:'lightslategrey'
                        },




                }



  React.useEffect(() => {
      // props.setAxisLabelsClass(props.style)
      const getColorScale = key => {return style[key].scale}
      props.setColor( getColorScale(props.style) )
      const getBackgroundColor = key => style[key].svgBkgColor
      props.setBackground( getBackgroundColor(props.style) )
      // console.log(props.style)
    }, [props.style]);

  return (null);
}
export default Style;
