/* Dependecies */
import { createGlobalStyle } from 'styled-components'

/* Components */
import normalize from './normalize'

const GlobalStyle = createGlobalStyle`
  /* The normalize file was genereted by gatsby */
  ${normalize}

  body {
    font-family: 'Nunito Sans', sans-serif;
  }
`

export default GlobalStyle
