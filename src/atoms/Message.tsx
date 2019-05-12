import React from 'react'
import styled from 'styled-components'

export const Message: React.FC = ({ children }) => <Div>{children}</Div>

const Div = styled.div`
  color: #cccccc;
  font-weight: bold;
`
