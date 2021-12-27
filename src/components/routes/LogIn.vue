<template>
  <div class="container">
    <div class="inputWrapper">
      <h1 class="title">Welcome user, please log-In before playing</h1>
      <input
        type="text"
        name="username"
        v-model="username"
        placeholder="Username"
      />
      <input
        type="number"
        name="username"
        v-model="userAge"
        placeholder="Age"
      />
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="Password"
      />
      <button
        type="button"
        class="btn btn-dark"
        :disabled="!username || !password || !userAge"
        @click="login()"
      >
        Login
      </button>
      <p class="errorMessage" v-if="errorMessage">
        Username or password incorrect
      </p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import router from "@/router";
import { ACTIONS_CONSTANTS } from "../../store/constants";
import { mapActions } from "vuex";

const Component = Vue.extend({
  name: "LogIn",
  data() {
    return {
      username: null,
      userAge: null,
      password: null,
      errorMessage: false,
    };
  },
  methods: {
    ...mapActions([ACTIONS_CONSTANTS.POST_USER, ACTIONS_CONSTANTS.GET_USERS]),
    login() {
      if (!this.username || !this.password || !this.userAge) {
        return (this.errorMessage = true);
      } else {
        this[ACTIONS_CONSTANTS.POST_USER]({
          username: this.username,
          userAge: this.userAge,
        });
        router.push("/profile");

        this.errorMessage = false;
      }
    },
  },
});

export default Component;
</script>

<style scoped>
.title {
  font-size: 18px;
}

.inputWrapper {
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-self: center;
}

input {
  margin-top: 20px;
}

.btn {
  margin-top: 20px;
}

.errorMessage {
  color: red;
  margin-top: 15px;
}
</style>
