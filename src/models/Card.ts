import { nanoid } from 'nanoid'

export class Card {
  id: string

  constructor() {
    this.id = nanoid()
  }
}
