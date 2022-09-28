import './App.css';
import './Header.tsx'
import { useState } from 'react';

function AdDesigner(){
    return (
       <div className="AdDesigner">
           <h3 className='AdTitle'> Ad Designer </h3>
           <p>Vote For</p>
           <form className='flavor'>
                <input className="Strawberry" type={"button"}>Strawberry</input>
                <input className="Chocolate" type={"button"}>Chocolate</input>
                <input className="Vanilla" type={"button"}>Vanilla</input>
           </form>

       </div> 
    )

}

export default AdDesigner;