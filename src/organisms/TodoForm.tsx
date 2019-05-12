import React from 'react'
import { InputWithLabel } from '../molecules/InputWithLabel'
import { TodoList as TodoListStore, Todo } from '../store'
import { Button } from '../atoms/Button'
import styled from 'styled-components'

type Props = {
  todoListStore: TodoListStore
}

export const TodoForm: React.FC<Props> = (props: Props) => (
  <Wrapper>
    <InputField label="Title" placeholder="Go to work" />
    <InputField label="Description" placeholder="No work No life" />
    <Button
      onClick={() => props.todoListStore.addTodo(new Todo('test', 'test'))}
    >
      Register
    </Button>
  </Wrapper>
)

const InputField = styled(InputWithLabel)`
  margin-bottom: 1rem;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
`
