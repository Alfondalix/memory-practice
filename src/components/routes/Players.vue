<template>
<div>
  <Header />
  <div class="container">
    <h1 class="title">Check other players
    </h1>
    <div class="playersTable">
      <table class="table table-responsive table-striped table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody v-for="user in users.users" :key="user.id">
          <tr>
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.address.city }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>
<script>
import Vue from 'vue';
import Header from '../layouts/Header.vue'
import { ACTIONS_CONSTANTS } from '../../store/constants';
import { mapActions, mapState } from "vuex";

const Component = Vue.extend({
  name:'Players',
  components: {
    Header
  },
  computed:{
    ...mapState(["users"])
  },
  methods:{
    ...mapActions([ACTIONS_CONSTANTS.GET_USERS ]),
    fetchUsers(){
      this[ACTIONS_CONSTANTS.GET_USERS]();
    }
  },
  mounted(){
    this.fetchUsers();
  }
});

export default Component;
</script>

<style scoped>
.title{
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}
</style>