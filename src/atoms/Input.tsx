import React from 'react'
import styled from 'styled-components'

export type Props = {
  onInput?: () => string | number
  placeholder?: string
  value?: string | number
}

export const Input: React.FC<Props> = ({ onInput, placeholder, value }) => (
  <BaseStyle value={value} placeholder={placeholder} onInput={onInput} />
)

const BaseStyle = styled.input`
  height: 30px;
  width: 300px;
  font-size: 1rem;
`
