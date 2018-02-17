import React from 'react';
import ReactDOM from 'react-dom';
import JSONComponent from './JSONComponent';
import MagicComponent from './sample/MagicComponent';
import TableComponent from './sample/TableComponent';
import tableJson from './sample/table.json';

const jsonSrc = {
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
    "this is a sample!",
    "so is this one!",
    { type:'div', props:{ style:{ color:"#f00", fontWeight:"bold" } }, children:"me too" },
    { render:() => <button>Cool ass button</button> },
    { type:MagicComponent },
    tableJson
  ]
}

const props = { jsonSrc, componentMap:{ TableComponent } };
ReactDOM.render(<JSONComponent {...props} />, document.getElementById('root'));
