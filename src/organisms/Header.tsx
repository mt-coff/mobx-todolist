import React from 'react'
import styled from 'styled-components'
import { Title } from '../atoms/Title'

export const Header: React.FC = () => (
  <Wrapper>
    <Title>Todo List</Title>
  </Wrapper>
)

const Wrapper = styled.header`
  width: 100vw;
  height: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  background: linear-gradient(#b23b1c, #e85525);
  color: #ffffff;
`
