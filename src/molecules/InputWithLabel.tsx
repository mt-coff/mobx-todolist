import React from 'react'
import { Input, Props as InputProps } from '../atoms/Input'
import { Label } from '../atoms/Label'
import styled from 'styled-components'

type Props = {
  className?: string
  label?: string
} & InputProps

export const InputWithLabel: React.FC<Props> = (props: Props) => (
  <Wrapper className={props.className}>
    <Label>{props.label}</Label>
    <Input {...props} />
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
