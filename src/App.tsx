import { useGameField } from '@/hooks/useGameField'
import '@/App.css'
import { Button } from "@/components/ui/button"
import { CardView } from '@/components/cardView'

function App() {
	const { deck, shuffle, player, draw, multiDraw, reset } = useGameField()

	return (
		<>
			<div className='flex flex-col items-center justify-center h-screen'>
				<div className='bg-green-100 p-2 rounded-lg mb-4'>
					<p>{deck.cards.length}</p>
					<CardView cards={deck.cards} />
				</div>
				<div className="inline-flex">
					<div className='p-1'><Button className='bg-amber-200'>asdfja;flj</Button></div>
					<div className='p-1'><Button className='bg-amber-200' onClick={() => draw(deck)}>draw</Button></div>
					<div className='p-1'><Button className='bg-amber-200' onClick={() => multiDraw(deck, 3)}>multiDraw</Button></div>
					<div className='p-1'><Button className='bg-amber-200' onClick={() => shuffle()}>shuffle</Button></div>
					<div className='p-1'><Button className='bg-amber-200' onClick={() => reset()}>reset</Button></div>
				</div>
				<div className='bg-blue-100 p-2 rounded-lg mt-4'>
					<p>{player.cards.length}</p>
					<CardView cards={player.cards} />
				</div>
			</div>
		</>
	)
}

export default App
