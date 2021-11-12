import React, { useState, useEffect } from 'react';

const DropdownMenu = (props) => {
  const [selectStyle, setSelectStyle] = useState(props.style);

  useEffect(() => {
    if (selectStyle) {
    props.setStyle(selectStyle)
  }}, [selectStyle]);

  function options(styles){
    if (styles === 'sparse'){
      return (
        <select id="lang" onChange={(e)=>{ setSelectStyle(e.target.value)}} value={selectStyle}>

          <option value="bv">BV</option>
          <option value="pastel1">Pastel 1</option>
          <option value="orrd">Orange/Red</option>
          <option value="spectral">Spectral</option>
          <option value="pubu">PuBu</option>
          <option value="tableau10">Tableau 10</option>
          <option value="sinebow">Sinebow</option>
        </select>
      )
    }else{
      if (styles === 'dense'){
        return (
          <select id="lang" onChange={(e)=>{ setSelectStyle(e.target.value)}} value={selectStyle}>
            <option value="magma">Magma</option>
            <option value="turbo">Turbo</option>
            <option value="orrd">Orange/Red</option>
            <option value="gnbu">Green/Blue</option>
            <option value="inferno">Inferno</option>
            <option value="schemeblues">Blue - 9</option>
            <option value="rdbu">Red / / Blue</option>
            <option value="spectral">Spectral</option>
            <option value="sinebow">Sinebow</option>
          </select>
        )
      }
    }
  }
  const styles = props.styles
  return (
    <div>
        <p> Estilos: { options(styles) } </p>
        <p></p>
    </div>
  );
}
export default DropdownMenu;
