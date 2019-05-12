import { observable } from 'mobx'
import { ulid } from 'ulid'

export class Todo {
  id: string = ulid()
  @observable title: string = ''
  @observable description: string = ''
  @observable finished = false

  constructor(title: string, description: string) {
    this.title = title
    this.description = description
  }
}
