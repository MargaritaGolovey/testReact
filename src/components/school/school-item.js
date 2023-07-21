// import { useState } from "react";
// import { render } from '@testing-library/react';
import './school-item.css'



const classNumber = ['1-a', '1-б', '1-в' ,'1-г', '2-a', '2-б', '1-в'];



const SchoolItem = ()=>{
  classNumber.map(item=>{
    return(      
      <li>{item}</li>
    )
  });
}




export default SchoolItem;
