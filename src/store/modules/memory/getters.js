export default {
  setGameMode: (state) => {
    if (state.mode[0] === "easy") {
      console.log("entro en el easy");
      console.log("cartas easy: ", state.cards.cards.slice(0, 16));
      return state.cards.cards.slice(0, 4);
    } else if (state.mode[1] === "medium") {
      console.log("entro en el medium");
      return state.cards.slice(0, 24);
    } else {
      console.log("entro en el god");
      return state.cards.slice(0, 36);
    }
  },
};
