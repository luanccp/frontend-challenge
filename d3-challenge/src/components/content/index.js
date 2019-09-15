import styled from 'styled-components'

export default styled.main`
  margin: 0 auto;
  max-Width: 100%;
  padding: 1.0875rem 12.9rem;
  background-color: ${({ theme }) => theme && theme.backgroundColor};
  color: ${({ theme }) => theme && theme.textColor};
`
