import React from 'react'
import Pages from './pages'
import Portal from './portal'
import ReactDOM from 'react-dom'
import Error from './error'

const content = {
  [Pages.PORTAL]: props => <Portal {...props} />,
  [Pages.ERROR]: props => <Error {...props} />
}

export default content
