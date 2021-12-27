import { MUTATIONS_CONSTANTS } from "./constants";

export default {
  [MUTATIONS_CONSTANTS.SET_CARDS]: (state, value) => (state.cards = value),
  [MUTATIONS_CONSTANTS.SET_IS_FLIPPED_CARD]: (state, value) =>
    (state.cardFlipped = value),
  [MUTATIONS_CONSTANTS.SET_IS_LOADING_GAME]: (state, value) =>
    (state.isLoadingGame = value),
  [MUTATIONS_CONSTANTS.SET_IS_CHECKED_CARD]: (state, { chosenCard }) => {
    chosenCard.cardCheck = !chosenCard.cardCheck;

    state.cards.cards.filter(
      (card) => card === chosenCard && state.selectedCards.push(card)
    );
    if (state.selectedCards.length % 2 === 0) {
      const a = state.selectedCards[state.selectedCards.length - 2];
      const b = state.selectedCards[state.selectedCards.length - 1];
      if (a.imgNum === b.imgNum) {
        setTimeout(() => {
          return state.cards.cards.forEach((card) => {
            if (card === a || card === b) return (card.cardSeen = true);
          });
        }, 1500);
      } else {
        setTimeout(() => {
          return state.cards.cards.forEach(
            (card) => card.cardSeen !== true && (card.cardCheck = false)
          );
        }, 800);
      }
    }
  },
  [MUTATIONS_CONSTANTS.SET_GAME_MODE]: (state, value) => {
    if (value === state.mode["easy"]) {
      const arr = state.cards.cards.slice(0, 15);
      return arr;
    }
    if (value === state.mode["medium"]) {
      const arr = state.cards.cards.slice(0, 25);
      return arr;
    } else {
      const arr = state.cards.cards.slice(0, 5);
      return arr;
    }
  },
};
