import { MUTATIONS_CONSTANTS } from "./constants";

export default {
  [MUTATIONS_CONSTANTS.SET_USER]: (state, value) => (state.user = value),
  [MUTATIONS_CONSTANTS.SET_USERS]: (state, value) => (state.users = value),
  [MUTATIONS_CONSTANTS.SET_IS_FETCHING_USERS]: (state, value) =>
    (state.isFetchingUsers = value),
  [MUTATIONS_CONSTANTS.SET_IS_LOADING]: (state, value) =>
    (state.isLoading = value),
};
