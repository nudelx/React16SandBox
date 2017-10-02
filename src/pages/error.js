import React from 'react'

const someOnClick = () => {
  const obj = {}
  const a = obj.test.id
}

const Error = ({ onClick, doError }) => {
  return (
    <div className={'errorCard'}>
      <div>
        <button onClick={someOnClick} className="btn btn-danger customError">
          `Make me an Error ${doError.is}`
        </button>
      </div>
    </div>
  )
}

export default Error
