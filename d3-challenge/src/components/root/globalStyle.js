import { createGlobalStyle } from 'styled-components'
import normalize from './normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: 'Nunito Sans', sans-serif;
  }
`

export default GlobalStyle