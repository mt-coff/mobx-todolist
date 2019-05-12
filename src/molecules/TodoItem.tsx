import React from 'react'
import { List } from '../atoms/List'
import styled from 'styled-components'
import { Button } from '../atoms/Button'
import { DeleteButton } from '../atoms/DeleteButton'

export type Props = {
  title?: string
  description?: string
  clickDone?: () => void
  clickDelete?: () => void
}

export const TodoItem: React.FC<Props> = ({
  title,
  description,
  clickDone,
  clickDelete
}) => (
  <List>
    <Wrapper>
      <div>{title}</div>
      <div>{description}</div>
      <Buttons>
        <DoneButton onClick={clickDone}>Done</DoneButton>
        <DeleteButton onClick={clickDelete} />
      </Buttons>
    </Wrapper>
  </List>
)

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`

const DoneButton = styled(Button)`
  width: 50px;
`
const Buttons = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin: 0 0.5rem;
  }
`
