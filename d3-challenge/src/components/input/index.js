import React from 'react'
import t from 'prop-types'

import { StyleInput, Wrapper } from './styles'

const Input = ({ value, onChange, onKeyUp, onKeyPress, type, placeholder }) => (
  <Wrapper>
    <StyleInput
      defaultValue={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onKeyPress={onKeyPress}
    />
  </Wrapper>
)

Input.propTypes = {
  value: t.any,
  onChange: t.func,
  onKeyUp: t.func,
  onKeyPress: t.func,
  type: t.string,
}

Input.defaultValues = {
  value: '',
  onChange: () => {},
  onKeyUp: () => {},
  onKeyPress: () => {},
  type: 'text'
}

export default Input
