import React from 'react';
import blot from './blot.jpg';

const MagicComponent = (props) => {
  return (
    <div style={{textAlign:"center", margin:"35px auto"}}>
      <img src={blot} alt="magic the gathering" />
      <div style={{margin:"25px 0", color:"#1e90ff"}}>{props.children || "Magic!"}</div>
      <span dangerouslySetInnerHTML={{__html:"&#129412;"}}></span>
    </div>
  );
}


export default MagicComponent;