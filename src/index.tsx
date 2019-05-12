import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './organisms/Header'
import { TodoList } from './organisms/TodoList'
import styled, { createGlobalStyle } from 'styled-components'
import { TodoList as TodoListStore } from './store'
import { TodoForm } from './organisms/TodoForm'

const todoListStore = new TodoListStore()

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <TodoForm todoListStore={todoListStore} />
        <TodoList todoListStore={todoListStore} />
      </Container>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
  }
  * {
    margin: 0;
    padding: 0;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    margin: 2rem 0;
  }
`

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.querySelector('#root')
)
