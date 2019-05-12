import { observable, computed, action } from 'mobx'
import { Todo } from './Todo'

export class TodoList {
  @observable todos: Todo[] = []

  @computed get finishedCount() {
    return this.todos.filter(todo => todo.finished).length
  }

  @computed get unfinishedCount() {
    return this.todos.filter(todo => !todo.finished).length
  }

  @action.bound
  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  @action.bound
  replaceTodo(id: string, todo: Todo) {
    const idx = this.todos.findIndex((el: Todo): boolean => el.id === id)
    this.todos[idx] = todo
  }

  @action.bound
  deleteTodo(id: string) {
    const newTodos = this.todos.filter((el: Todo): boolean => el.id !== id)
    this.todos = newTodos
  }
}
