import { Player } from '@/models/Player'
import { useState } from 'react'
import { Deck } from '@/models/Deck'
export const useGameField = () => {
	const [deck, setDeck] = useState<Deck>(new Deck(undefined, 30))
	const [player, setPlayer] = useState<Player>(new Player([], []))

	const shuffle = () => {
		const { newDeck } = deck.shuffle()
		setDeck(newDeck)
	}

	const draw = () => {
		const { card, newDeck } = deck.draw()
		const { newPlayer } = player.draw(card)
		setDeck(newDeck)
		setPlayer(newPlayer)
	}

	const multiDraw = (num: number) => {
		const { cards, newDeck } = deck.multiDraw(num)
		const { newPlayer } = player.multiDraw(cards)
		setDeck(newDeck)
		setPlayer(newPlayer)
	}

	const reset = () => {
		const { newDeck } = deck.reset()
		const { newPlayer } = player.reset()
		setDeck(newDeck)
		setPlayer(newPlayer)
	}

	return {
		deck,
		shuffle,
		player,
		draw,
		multiDraw,
		reset,
	}
}
