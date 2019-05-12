import React from 'react'
import styled from 'styled-components'

export type Props = {
  onClick?: () => void
}

export const DeleteButton: React.FC<Props> = ({ onClick }) => (
  <BaseStyle onClick={onClick} />
)

const BaseStyle = styled.button`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: relative;
  :focus {
    outline: none;
  }
  &::before,
  &::after {
    display: block;
    content: '';
    background-color: #aaaaaa;
    height: 2px;
    width: 10px;
    position: absolute;
  }
  &::before {
    transform: rotate(-45deg);
    top: 8px;
    right: 4px;
  }
  &::after {
    transform: rotate(45deg);
    top: 8px;
    right: 4px;
  }
`
