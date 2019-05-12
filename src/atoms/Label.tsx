import React from 'react'
import styled from 'styled-components'

export const Label: React.FC = ({ children }) => (
  <BaseStyle>{children}</BaseStyle>
)

const BaseStyle = styled.label`
  font-weight: bold;
  font-size: 0.8rem;
`
