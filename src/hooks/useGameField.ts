import { useDeck } from "@/hooks/useDeck";
import { usePlayer } from "@/hooks/usePlayer";

export const useGameField = () => {
  const { deck, shuffle, reset: resetDeck } = useDeck();
  const { player, draw, multiDraw, reset: resetPlayer } = usePlayer();

  const reset = () => {
    resetDeck();
    resetPlayer();
  };

  return {
    deck,
    shuffle,
    player,
    draw,
    multiDraw,
    reset,
  };
};
