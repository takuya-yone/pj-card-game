import { Card } from '@/models/Card'

export class Deck {
	cards: Card[] = []

	constructor(cards?: Card[]) {
		if (cards) {
			this.cards = cards
			return
		}
		this.cards = this.initCards(40)
	}

	initCards = (num: number) => {
		return Array.from({ length: num }, () => new Card())
	}

	draw = () => {
		if (this.cards.length === 0) {
			throw new Error('no more deck cards')
		}
		const card = this.cards.pop()
		if (card === undefined) {
			throw new Error('drawed card is undefined')
		}
		return { newDeck: new Deck(this.cards), card: card }
	}

	multiDraw = (num: number) => {
		if (this.cards.length < num) {
			throw new Error('no more deck cards')
		}

		const cards: Card[] = []

		while (cards.length < num) {
			const { card } = this.draw()
			cards.push(card)
		}
		return { newDeck: new Deck(this.cards), cards: cards }
	}

	shuffle = () => {
		return {
			newDeck: new Deck(this.cards.sort(() => 0.5 - Math.random())),
		}
	}

	reset = () => {
		return { newDeck: new Deck() }
	}
}
