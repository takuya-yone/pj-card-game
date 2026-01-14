import { Card } from '@/models/Card'
import { type PlayerEvent, DrawEvent, MultiDrawEvent, ResetEvent } from '@/models/PlayerEvent'

export class Player {
  cards: Card[]
  events: PlayerEvent[]

  constructor(cards: Card[], events: PlayerEvent[]) {
    this.cards = cards
    this.events = events
  }

  initPlayer = () => {
    return { newPlayer: new Player([], []) }
  }

  draw = (card: Card) => {
    this.cards.push(card)
    this.events.push(new DrawEvent(this, card))
    return { newPlayer: new Player(this.cards, this.events) }
  }

  multiDraw = (cards: Card[]) => {
    cards.map((card) => {
      this.cards.push(card)
    })
    this.events.push(new MultiDrawEvent(this, cards))
    return { newPlayer: new Player(this.cards, this.events) }
  }

  reset = () => {
    this.events.push(new ResetEvent(this))
    return { newPlayer: new Player([], this.events) }
  }
}
