import { Card as CardComp, CardContent } from '@/components/ui/card'
import { Card } from '@/models/Card'

export const CardView = (props: { cards: Card[] }) => {
	return (
		<div className="grid grid-cols-4 gap-4">
			{props.cards.map((card, index) => (
				<CardComp key={index}>
					<CardContent>
						<p className="truncate">{card.id}</p>
					</CardContent>
				</CardComp>
			))}
		</div>
	)
}
