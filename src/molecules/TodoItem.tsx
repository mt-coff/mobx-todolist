import React from 'react'
import { List } from '../atoms/List'
import styled from 'styled-components'
import { Button } from '../atoms/Button'
import { DeleteButton } from '../atoms/DeleteButton'

export type Props = {
  title?: string
  description?: string
  finished?: boolean
  clickDone?: () => void
  clickDelete?: () => void
}

export const TodoItem: React.FC<Props> = ({
  title,
  description,
  finished,
  clickDone,
  clickDelete
}) => (
  <StyledList finished={finished}>
    <Wrapper>
      <div>{title}</div>
      <div>{description}</div>
      <Buttons>
        <DoneButton onClick={clickDone}>
          {finished ? 'Start' : 'Done'}
        </DoneButton>
        <DeleteButton onClick={clickDelete} />
      </Buttons>
    </Wrapper>
  </StyledList>
)

type StyledListProps = {
  finished?: boolean
}
const StyledList = styled(List)`
  background-color: ${(props: StyledListProps) =>
    props.finished ? '#eee' : 'transparet'};
`

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
