import { useEffect, useState } from "react";
import { Deck } from "@/models/Deck";

export const useDeck = () => {
  const [deck, setDeck] = useState<Deck>(new Deck());

  useEffect(() => {}, [deck]);

  const draw = () => {
    const { card, newDeck } = deck.draw();
    console.log(card);
    setDeck(newDeck);
  };

  const multiDraw = (num: number) => {
    const { cards, newDeck } = deck.multiDraw(num);
    console.log(cards);
    setDeck(newDeck);
  };

  const shuffle = () => {
    const { newDeck } = deck.shuffle();
    setDeck(newDeck);
  };

  const reset = () => {
    const { newDeck } = deck.reset();
    setDeck(newDeck);
  };

  return {
    deck,
    setDeck,
    draw,
    multiDraw,
    shuffle,
    reset,
  };
};
