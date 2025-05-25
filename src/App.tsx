import { useGameField } from '@/hooks/useGameField'
import '@/App.css'

function App() {
	const { deck, shuffle, player, draw, multiDraw, reset } = useGameField()

	return (
		<>
			<p>{deck.cards.length}</p>
			<p>{JSON.stringify(deck.cards)}</p>
			<button onClick={() => draw(deck)}>draw</button>
			<button onClick={() => multiDraw(deck, 3)}>multiDraw</button>
			<button onClick={() => shuffle()}>shuffle</button>
			<button onClick={() => reset()}>reset</button>
			<p>{player.cards.length}</p>
			<p>{JSON.stringify(player.cards)}</p>
		</>
	)
}

export default App
