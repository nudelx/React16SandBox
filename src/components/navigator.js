import React from 'react'
import '../App.css'
import ThemedButton from './themedButton';
import ThemeTogglerButton from './themeTogglerButton';

const Navigator = ({ onClick }) => {
  return (
    <ul className="buttonsList">
      <li>
        <ThemedButton
          className="btn btn-info"
          onClick={onClick}
          id="Portal"
          role="button"
        >
          PORTAL
        </ThemedButton>
      </li>
      <li>
        <ThemedButton
          className="btn btn-info"
          onClick={onClick}
          id="Error"
          role="button"
        >
          Error
        </ThemedButton>
      </li>
      <li>
        <ThemeTogglerButton
          className="btn btn-info"
          id="ThemeToggler"
          role="button"
        />
      </li>
    </ul>
  )
}

export default Navigator
