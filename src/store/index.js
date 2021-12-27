import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import memory from "./modules/memory/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {
      username: "",
      age: 0,
    },
    users: [],
    isFetchingUsers: false,
    isLoading: false,
  },
  actions,
  mutations,
  modules: {
    memory,
  },
});

export default store;
