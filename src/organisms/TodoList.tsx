import React from 'react'
import { observer } from 'mobx-react'
import { TodoList as TodoListStore } from '../store'
import { SubTitle } from '../atoms/SubTitle'
import { List } from '../atoms/List'
import { Message } from '../atoms/Message'
import styled from 'styled-components'

type Props = {
  todoListStore: TodoListStore
}

export const TodoList: React.FC<Props> = observer(({ todoListStore }) => (
  <div>
    <SubTitle>Your Todo</SubTitle>
    {todoListStore.todos.map(todo => (
      <List key={todo.id}>{todo.title}</List>
    ))}
    {(() => {
      if (!todoListStore.todos.length)
        return (
          <MessageWrapper>
            <Message>No Todo :)</Message>
          </MessageWrapper>
        )
    })()}
  </div>
))

const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`
