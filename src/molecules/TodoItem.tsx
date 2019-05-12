import React from 'react'
import { List } from '../atoms/List'
import styled from 'styled-components'
import { DeleteButton } from '../atoms/DeleteButton'

export type Props = {
  title?: string
  description?: string
  clickDelete?: () => void
}

export const TodoItem: React.FC<Props> = ({
  title,
  description,
  clickDelete
}) => (
  <List>
    <Wrapper>
      <div>{title}</div>
      <div>{description}</div>
      <DeleteButton onClick={clickDelete} />
    </Wrapper>
  </List>
)

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`
