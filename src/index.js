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
    "this is a sample!",
    "so is this one!",
    { type:'div', props:{ style:{ color:"#f00", fontWeight:"bold" } }, children:"me too" },
    { render:() => <button style={buttonStyle}>Cool ass button</button> },
    () => <div><input type="text" placeholder="direct function" /></div>,
    <MagicComponent>Magic children</MagicComponent>,
    { type:MagicComponent },
    tableJson
  ]
}
// TODO: list example?

// console.log(JSON.stringify(jsonSrc));

// const a = {};

// a.children = a;


// jsonSrc = {
//   children:a
// }


// console.log(JSON.stringify(jsonSrc)); // Throws error, catching a circular struct, don't try any further

const props = { jsonSrc, componentMap:{ TableComponent } };
ReactDOM.render(<JSONComponent {...props} />, document.getElementById('root'));
