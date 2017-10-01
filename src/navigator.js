import React from 'react'
import './App.css';

const Navigator = ({onClick}) => {
  return (<ul className="buttonsList">
      <li>
        <a className="btn btn-info" onClick={onClick} id="Portal" href="#" role="button">PORTAL</a>
      </li>
      <li>
        <a className="btn btn-info" onClick={onClick} id="Link1"  href="#" role="button">LINK</a>
      </li>
      <li>
        <a className="btn btn-info" onClick={onClick} id="Link2" href="#" role="button">LINK</a>
      </li>
  </ul>)
}


export default Navigator
