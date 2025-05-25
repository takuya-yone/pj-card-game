import { useDecks } from "./hooks/useDecks";
import { usePlayer } from "./hooks/usePlayer";
import "./App.css";

function App() {
  const { deck, shuffle, reset: deckReset } = useDecks();
  const { player, draw, multiDraw, reset: playerReset } = usePlayer();

  return (
    <>
      <p>{deck.cards.length}</p>
      <p>{JSON.stringify(deck.cards)}</p>
      <button onClick={() => draw(deck)}>draw</button>
      <button onClick={() => multiDraw(deck, 3)}>multiDraw</button>
      <button onClick={() => shuffle()}>shuffle</button>
      <button
        onClick={() => {
          deckReset();
          playerReset();
        }}
      >
        reset
      </button>
      <p>{player.cards.length}</p>
      <p>{JSON.stringify(player.cards)}</p>
    </>
  );
}

export default App;
