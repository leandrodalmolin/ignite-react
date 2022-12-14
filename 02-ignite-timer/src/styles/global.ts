import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    // Default. Will be removed in Forced Color Modes
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
    // Fallback. Will be visible with custom system colors in Forced Color Modes
	  outline: 1px solid transparent;
  }

  body {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button,
  textarea {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
