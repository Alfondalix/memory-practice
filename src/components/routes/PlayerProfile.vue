<template>
  <div>
    <Header />
    <div class="container">
      <h1 class="title">Profile</h1>
      <div class="user-profile">
        <div class="card card-center" style="width: 18rem">
          <img src="../../assets/user-img.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Username: {{ user.username }}</p>
            <p class="card-text">Email: {{ addEmail }}</p>
            <p class="card-text">Age: {{ user.userAge }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import Header from "../layouts/Header.vue";

const Component = Vue.extend({
  name: "PlayerProfile",
  components: {
    Header,
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
    addEmail() {
      const userEmail = `${this.user.username}@gmail.com`;
      return userEmail;
    },
  },
});

export default Component;
</script>

<style scoped>
.title {
  margin-top: 50px;
  text-align: center;
  font-size: 18px;
  color: black;
  font-weight: bold;
}

.user-profile {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.card-center {
  box-shadow: 4px 6px 19px 0px rgba(0, 0, 0, 0.75);
}
</style>