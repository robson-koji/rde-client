import React from 'react';
const d3 = require('d3');



const bv = [ "#b08beb", "#3ea0dd", "#faa586", "#4661ee", "#8faabb", "#f5a52a", "#23bfaa", "#1bcdd1", "#ec5657" ]
const customFlat1 = ["#38C172","#E3342F","#F6993F","#FFED4A","#4DC0B5","#3490DC","#9561E2","#F66D9B", "#B8C2CC",]
// const experimentalColorScaleTextures = ["#a50026","#c7422a","#df7232","#f3a14b","#ffcf7b","#afdbf1","#7ab7e5","#5390d1","#386bb6","#2d4697"]
const experimentalColorScaleTextures = ["#2d4697","#386bb6","#5390d1","#7ab7e5","#afdbf1","#ffcf7b","#f3a14b","#df7232","#c7422a","#a50026"]


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
                    svgBkgColor:'rgba(199, 169, 123, 0.1)'
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
                      svgBkgColor:'#516777'
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
                      svgBkgColor:'#77889912'
                        },
                    customflat1:
                      {scale:{colors: d3.scaleOrdinal(customFlat1),
                              accessor: 'Ordinal'},
                      svgBkgColor:'lightslategrey'
                        },
                    bv:
                      {scale:{colors: d3.scaleOrdinal(bv),
                              accessor: 'Ordinal'},
                      svgBkgColor:'#FFFFFF'
                        },
                    ecst:
                      {scale:{colors: d3.scaleOrdinal(experimentalColorScaleTextures),
                              accessor: 'Ordinal'},
                      svgBkgColor:'#FFFFFF'
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
