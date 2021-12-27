import Vue from 'vue';
import VueRouter from "vue-router";
import LogIn from '../components/routes/LogIn.vue';
import Game from '../components/routes/Game.vue'; 
import PlayerProfile from '../components/routes/PlayerProfile.vue'; 
import Players from '../components/routes/Players.vue'; 
import NotFound from '../components/routes/NotFound.vue'; 

const app = Vue;
app.use(VueRouter);

const routes = [
  {
    path:'/login',
    name:'Log-In',
    component: LogIn
  },
  {
    path:'/game',
    name:'Game',
    component: Game
  },
  {
    path:'/players',
    name:'Players',
    component: Players
  },
  {
    path:'/profile',
    name:'PlayerProfile',
    component: PlayerProfile
  },
  {
    path: "*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;