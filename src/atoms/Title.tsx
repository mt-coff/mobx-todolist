import React from 'react'
import styled from 'styled-components'

export type Props = {
  className?: string
}

export const Title: React.FC<Props> = ({ children, className }) => (
  <H1 className={className}>{children}</H1>
)

const H1 = styled.h1`
  font-family: fantasy;
`
