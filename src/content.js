
import React from 'react'
import Pages from './pages'
import Portal from './portal'
import ReactDOM from 'react-dom'


const content = {
  [Pages.PORTAL]: (props) =>  <Portal {...props}/>
}


export default content
