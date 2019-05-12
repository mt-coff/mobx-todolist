import React from 'react'
import { observer } from 'mobx-react'
import { TodoList as TodoListStore } from '../store'
import { SubTitle } from '../atoms/SubTitle'
import { TodoItem } from '../molecules/TodoItem'
import { Message } from '../atoms/Message'
import styled from 'styled-components'

type Props = {
  todoListStore: TodoListStore
}

export const TodoList: React.FC<Props> = observer(({ todoListStore }) => (
  <div>
    <StyledSubTitle>Your Todo</StyledSubTitle>
    {(() => {
      if (!todoListStore.todos.length)
        return (
          <MessageWrapper>
            <Message>No Todo :)</Message>
          </MessageWrapper>
        )
      return (
        <CountWrapper>
          <div>Finished: {todoListStore.finishedCount.toString()}</div>
          <div>Unfinished: {todoListStore.unfinishedCount.toString()}</div>
        </CountWrapper>
      )
    })()}
    {todoListStore.todos.map(todo => (
      <TodoItem
        key={todo.id}
        title={todo.title}
        description={todo.description}
      />
    ))}
  </div>
))

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const StyledSubTitle = styled(SubTitle)`
  text-align: center;
  margin-bottom: 1rem;
`

const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`
