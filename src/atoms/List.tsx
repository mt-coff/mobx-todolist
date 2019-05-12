import React from 'react'
import styled from 'styled-components'

export type Props = {
  className?: string
}

export const List: React.FC<Props> = ({ children, className }) => (
  <Li className={className}>{children}</Li>
)

const Li = styled.li`
  list-style: none;
  height: auto;
  width: auto;
  border: solid 1px #eeeeee;
  padding: 10px;
`
