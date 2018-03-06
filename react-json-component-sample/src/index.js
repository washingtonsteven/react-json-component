import React from 'react';
import ReactDOM from 'react-dom';
import JSONComponent from './JSONComponent';
import MagicComponent from './sample/MagicComponent';
import TableComponent from './sample/TableComponent';
import tableJson from './sample/table.json';

const buttonStyle = {
  backgroundColor:"#007bff",
  color:"#fff",
  fontSize:"36px",
  border:"none",
  cursor:"pointer",
  margin:"15px auto",
  padding: "10px 25px"
};

let jsonSrc = {
  type:'div',
  props:{
    style:{
      textAlign:"center",
      fontSize:"24px",
      fontFamily:"sans-serif",
      color:"#007bff"
    }
  },
  children:[
    // TextNode
    "this is a sample!",

    // TextNode
    "so is this one!",

    // another JSON object
    { type:'div', props:{ style:{ color:"#f00", fontWeight:"bold" } }, children:"me too" },

    // JSON object with `render()` function
    { render:() => <button style={buttonStyle}>Sweet button</button> },

    // Function/Stateless component
    () => <div><input type="text" placeholder="direct function" /></div>,

    // JSX
    <MagicComponent>Magic children</MagicComponent>,

    // JSON, without `props` or `children`
    { type:MagicComponent },

    // JSON included from external file (./sample/table.json)
    tableJson
  ]
}

// componentMap, maps string "TableComponent" to the `TableComponent` imported from `./sample/TableComponent.js`
const componentMap = { TableComponent };

const props = { jsonSrc, componentMap };
ReactDOM.render(<JSONComponent {...props} />, document.getElementById('root'));
