import React from 'react'
import { ThemeContext } from '../context/ThemeContext';

const ThemeTogglerButton = (props) => {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <button
          {...props}
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}
        >
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;