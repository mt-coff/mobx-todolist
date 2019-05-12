import React from 'react'
import styled from 'styled-components'

export const List: React.FC = ({ children }) => <Li>{children}</Li>

const Li = styled.li`
  list-style: none;
  height: auto;
  width: auto;
`
