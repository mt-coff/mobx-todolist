import React, { useState, useEffect } from 'react'
import { InputWithLabel } from '../molecules/InputWithLabel'
import { TodoList as TodoListStore, Todo } from '../store'
import { Button } from '../atoms/Button'
import styled from 'styled-components'

type Props = {
  todoListStore: TodoListStore
}

export const TodoForm: React.FC<Props> = ({ todoListStore }) => {
  const [todo, setTodo] = useState(new Todo())

  return (
    <Wrapper>
      <InputField
        label="Title"
        placeholder="Go to work"
        value={todo.title}
        onChange={e => {
          setTodo({ ...todo, title: e.currentTarget.value })
        }}
      />
      <InputField
        label="Description"
        placeholder="No work No life"
        value={todo.description}
        onChange={e => {
          setTodo({ ...todo, description: e.currentTarget.value })
        }}
      />
      <Button
        onClick={() => {
          if (!todo.title || !todo.description) {
            alert('Please input title & description')
            return
          }
          todoListStore.addTodo(todo)
          setTodo(new Todo())
        }}
      >
        Register
      </Button>
    </Wrapper>
  )
}

const InputField = styled(InputWithLabel)`
  margin-bottom: 1rem;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
`
