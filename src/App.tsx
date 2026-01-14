import { useGameField } from '@/hooks/useGameField'
import '@/App.css'
import { CardView } from '@/components/cardView'
import { UserActionButton } from './components/userActionButton'

function App() {
	const { deck, shuffle, player, draw, multiDraw, reset } = useGameField()

	console.log(player.events)
	return (
		<>
			<div className="flex flex-col items-center justify-center h-screen">
				<div className="bg-green-100 p-2 rounded-lg mb-4">
					<p>{deck.cards.length}</p>
					<CardView cards={deck.cards} />
				</div>
				<div className="inline-flex pt-10 p-3">
					<UserActionButton action="draw" onClick={() => draw()} className="px-4" />
					<UserActionButton
						action="multiDraw"
						onClick={() => multiDraw(3)}
						className="px-4"
					/>
					<UserActionButton action="shuffle" onClick={() => shuffle()} className="px-4" />
					<UserActionButton action="reset" onClick={() => reset()} className="px-4" />
				</div>
				<div className="bg-blue-100 p-2 rounded-lg mt-4">
					<p>{player.cards.length}</p>
					<CardView cards={player.cards} />
				</div>
			</div>
		</>
	)
}

export default App
