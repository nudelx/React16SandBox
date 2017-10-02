import React from 'react'

let error = {}
const someOnClick = () => {
  error.doError = true
}

const Error = ({ onClick, doError }) => {
  return (
    <div className={'errorCard'}>
      <div>
        <button onClick={someOnClick} className="btn btn-danger customError">
          {'Make me an Error'}
          {error.doError && error.error.id}
        </button>
      </div>
    </div>
  )
}

export default Error
