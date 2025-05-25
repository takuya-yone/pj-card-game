import { useEffect, useState } from "react";
import { Player } from "../models/Player";
import { Deck } from "../models/Deck";

export const usePlayer = () => {
  const [player, setPlayer] = useState<Player>(new Player([]));

  useEffect(() => {}, [player]);

  const draw = (deck: Deck) => {
    const { card } = deck.draw();
    const { newPlayer } = player.draw(card);
    setPlayer(newPlayer);
  };

  const multiDraw = (deck: Deck, num: number) => {
    const { cards } = deck.multiDraw(num);
    const { newPlayer } = player.multiDraw(cards);
    setPlayer(newPlayer);
  };

  const reset = () => {
    const { newPlayer } = player.reset();
    setPlayer(newPlayer);
  };

  return {
    player,
    setPlayer,
    draw,
    multiDraw,
    reset,
  };
};
