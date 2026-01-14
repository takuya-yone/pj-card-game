import { Deck } from '@/models/Deck'
import { Player } from '@/models/Player'
export type UserActionType = 'draw' | 'multiDraw' | 'shuffle' | 'reset'

export type _EventType =
  | {
      eventName: 'DRAW'
      deck: Deck
      player: Player
    }
  | {
      eventName: 'MULTI_DRAW'
      deck: Deck
      player: Player
    }
  | {
      eventName: 'SHUFFLE'
      deck: Deck
    }
  | {
      eventName: 'RESET'
      deck: Deck
      player: Player
    }
