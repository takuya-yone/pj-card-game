import { Card } from '@/models/Card'
import { Player } from '@/models/Player'
import { Clock } from '@/utils/Clock'

export interface PlayerEvent {
	player: Player
	timestamp: Date
	show: () => string
}

export class DrawEvent implements PlayerEvent {
	player: Player
	timestamp: Date
	card: Card

	constructor(player: Player, card: Card) {
		this.player = player
		this.timestamp = Clock.getNow()
		this.card = card
	}
	show = () => `card drawed: ${this.card.id}`
}

export class MultiDrawEvent implements PlayerEvent {
	player: Player
	timestamp: Date
	cards: Card[]

	constructor(player: Player, cards: Card[]) {
		this.player = player
		this.timestamp = Clock.getNow()
		this.cards = cards
	}
	show = () => `cards drawed: ${this.cards.map((card) => card.id)}`
}

export class ResetEvent implements PlayerEvent {
	player: Player
	timestamp: Date

	constructor(player: Player) {
		this.player = player
		this.timestamp = Clock.getNow()
	}
	show = () => `reseted`
}

export class ShuffleEvent implements PlayerEvent {
	player: Player
	timestamp: Date

	constructor(player: Player) {
		this.player = player
		this.timestamp = Clock.getNow()
	}
	show = () => `shuffled`
}
