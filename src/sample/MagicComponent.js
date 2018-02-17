import React from 'react';
import blot from './blot.jpg';

export default () => {
  return (
    <div style={{textAlign:"center"}}>
      <img src={blot} alt="magic the gathering" />
      <div style={{margin:"25px 0", color:"#1e90ff"}}>Magic!</div>
      <span dangerouslySetInnerHTML={{__html:"&#129412;"}}></span>
    </div>
  );
}