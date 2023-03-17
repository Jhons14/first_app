import React from "react";
import './TodoIcon.css'
import {ReactComponent as DeleteSVG} from './closeIcon.svg'
import {ReactComponent as CheckSVG} from "./checkIcon.svg";

  const iconTypes = {
    'check': (color, active) => (
    <CheckSVG className= {`Icon-svg Icon-svg--check Icon-svg--check---${active}`} fill={color}/>
    ),
    'delete': color => (
    <DeleteSVG className='Icon-svg Icon-svg--delete' fill={color}/>
    )
  }

function TodoIcon({type, color, onClick, active}) {
  return(
    <span 
      className = {`Icon-container Icon-container--${type}`}
      onClick = {onClick}
    >
      {iconTypes[type](color, active)}
    </span>
  )
}

export {TodoIcon};