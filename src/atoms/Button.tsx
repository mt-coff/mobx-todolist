import React from 'react'
import styled from 'styled-components'

export type Props = {
  className?: string
  onClick?: () => void
}

export const Button: React.FC<Props> = ({ children, className, onClick }) => (
  <BaseStyle className={className} onClick={onClick}>
    {children}
  </BaseStyle>
)

const BaseStyle = styled.button`
  width: 100px;
  padding: 5px;
  color: black;
  background-color: white;
  border: solid 1px black;
  border-radius: 10px;
`
