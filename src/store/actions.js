import { MUTATIONS_CONSTANTS } from "./constants";
import { ACTIONS_CONSTANTS } from "./constants";
import Axios from "axios";

export default {
  [ACTIONS_CONSTANTS.POST_USER]({ commit }, user) {
    commit(MUTATIONS_CONSTANTS.SET_USER, user);
  },
  async [ACTIONS_CONSTANTS.GET_USERS]({ commit }) {
    commit(MUTATIONS_CONSTANTS.SET_IS_FETCHING_USERS, true);
    commit(MUTATIONS_CONSTANTS.SET_IS_LOADING, true);
    try {
      const response = await Axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = response.data;
      commit(MUTATIONS_CONSTANTS.SET_USERS, { users });
      commit(MUTATIONS_CONSTANTS.SET_IS_FETCHING_USERS, false);
      commit(MUTATIONS_CONSTANTS.SET_IS_LOADING, false);
    } catch (err) {
      console.error(err);
      commit(MUTATIONS_CONSTANTS.SET_IS_FETCHING_USERS, false);
      commit(MUTATIONS_CONSTANTS.SET_IS_LOADING, false);
    }
  },
};
