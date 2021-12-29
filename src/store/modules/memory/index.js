import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

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
  getters,
};
