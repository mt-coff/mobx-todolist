import React from 'react'
import { InputWithLabel } from '../molecules/InputWithLabel'
import { TodoList as TodoListStore, Todo } from '../store'
import { observer } from 'mobx-react'
import { Button } from '../atoms/Button'
import styled from 'styled-components'

type Props = {
  todoListStore: TodoListStore
}

type State = {
  todo: Todo
}
@observer
export class TodoForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { todo: new Todo() }
  }

  register(): void {
    if (!this.state.todo.title || !this.state.todo.description) {
      alert('please input title & description')
      return
    }
    this.props.todoListStore.addTodo(this.state.todo)
    const newTodo = new Todo()
    this.setState({ todo: newTodo })
  }

  render() {
    return (
      <Wrapper>
        <InputField
          label="Title"
          placeholder="Go to work"
          value={this.state.todo.title}
          onChange={e => {
            this.state.todo.title = e.currentTarget.value
          }}
        />
        <InputField
          label="Description"
          placeholder="No work No life"
          value={this.state.todo.description}
          onChange={e => {
            this.state.todo.description = e.currentTarget.value
          }}
        />
        <Button
          onClick={() => {
            this.register()
          }}
        >
          Register
        </Button>
      </Wrapper>
    )
  }
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
