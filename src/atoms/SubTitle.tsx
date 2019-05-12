import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

export const SubTitle: React.FC<Props> = ({ children, className }) => (
  <H2 className={className}>{children}</H2>
)

const H2 = styled.h2`
  font-family: fantasy;
`
