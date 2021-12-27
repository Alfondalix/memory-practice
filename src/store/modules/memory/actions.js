import { MUTATIONS_CONSTANTS } from "./constants";
import { ACTIONS_CONSTANTS } from "./constants";
import { cards } from "../../../data.js";

export default {
  [ACTIONS_CONSTANTS.GET_CARDS]: ({ commit }) => {
    try {
      commit(MUTATIONS_CONSTANTS.SET_IS_LOADING_GAME, true);
      commit(MUTATIONS_CONSTANTS.SET_CARDS, { cards });
    } catch (err) {
      console.error(err);
      commit(MUTATIONS_CONSTANTS.SET_IS_LOADING_GAME, false);
    }
  },
  [ACTIONS_CONSTANTS.CHECK_CARDS]: ({ commit }, card) => {
    commit(MUTATIONS_CONSTANTS.SET_IS_CHECKED_CARD, card);
  },
};
