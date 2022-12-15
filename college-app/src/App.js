import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import MainIndex from './Resturent/MainIndex';
import Slider from './Slider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [color,setcolor]=useState(false)
// color=true
// !color=false

  return (
    <>
    <MainIndex/>
    {/* <Navbar/>
   <Slider/> */}
   <p style={color?{color:"red"}:{color:"yellow"}}>color tag</p>
   {/* class1 and 2 are css classess */}
   <p className={`${color?'class1':'class2'}`}>color tag</p>
   <button onClick={()=>setcolor(!color)}>{color?"red":"green"}</button>
  
    </>
   
  );
}

export default App;
