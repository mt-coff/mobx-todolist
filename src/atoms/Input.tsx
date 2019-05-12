import React from 'react'
import styled from 'styled-components'

export type Props = {
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  placeholder?: string
  value?: string | number
}

export const Input: React.FC<Props> = ({ onChange, placeholder, value }) => (
  <BaseStyle value={value} placeholder={placeholder} onChange={onChange} />
)

const BaseStyle = styled.input`
  height: 30px;
  width: 300px;
  font-size: 1rem;
`
