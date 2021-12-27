import mutations from "./mutations";
import actions from "./actions";

export default {
  state: {
    selectedCards: [],
    cards: [],
    isLoadingGame: false,
    cardFlipped: false,
    cardChecked: false,
    mode: ["easy", "medium", "god"],
  },
  mutations,
  actions,
};
