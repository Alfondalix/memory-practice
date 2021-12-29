<template>
  <div>
    <Header />
    <div class="container">
      <h1 class="title">Choose a game-mode</h1>
      <div class="buttonsContainer">
        <button type="button" @click="test" class="btn btn-warning number">
          Easy
        </button>
        <button type="button" @click="test" class="btn btn-primary number">
          Medium
        </button>
        <button type="button" @click="test" class="btn btn-info number">
          God Mode
        </button>
      </div>
      <div class="cardsContainer">
        <div
          class="card"
          v-for="card in cards"
          :key="card.id"
          @click="checkCard(card)"
        >
          <img
            v-if="card.cardCheck || flipped"
            :src="card.imgFront"
            class="imgFront"
          />
          <img v-else :src="card.imgBack" class="imgFront" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Header from "../layouts/Header.vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import { ACTIONS_CONSTANTS } from "../../store/modules/memory/constants";
import { MUTATIONS_CONSTANTS } from "../../store/modules/memory/constants";

const Component = Vue.extend({
  name: "Game",
  components: {
    Header,
  },
  computed: {
    ...mapState({
      cards: (state) => state["memory"].cards.cards,
      flipped: (state) => state["memory"].cardFlipped,
      mode: (state) => state["memory"].mode,
    }),
    ...mapGetters({ test: "setGameMode" }),
  },
  methods: {
    ...mapActions([ACTIONS_CONSTANTS.GET_CARDS, ACTIONS_CONSTANTS.CHECK_CARDS]),
    ...mapMutations([
      MUTATIONS_CONSTANTS.SET_IS_FLIPPED_CARD,
      MUTATIONS_CONSTANTS.SET_GAME_MODE,
    ]),
    setCards() {
      this[ACTIONS_CONSTANTS.GET_CARDS]();
      this.gameMode(this.mode);
      this.shuffle(this.cards);
      setTimeout(() => {
        this[MUTATIONS_CONSTANTS.SET_IS_FLIPPED_CARD](false);
      }, 3000);
      this[MUTATIONS_CONSTANTS.SET_IS_FLIPPED_CARD](true);
    },
    checkCard(chosenCard) {
      this[ACTIONS_CONSTANTS.CHECK_CARDS]({ chosenCard });
    },
    shuffle(cards) {
      let i, j, k;
      for (i = cards.length - 1; i > 0; i--) {
        j = Math.round(Math.random() * (i - 1));
        k = cards[i];
        cards[i] = cards[j];
        cards[j] = k;
      }
      return cards;
    },
    gameMode(modo) {
      if (modo === this.mode[0]) {
        this[MUTATIONS_CONSTANTS.SET_GAME_MODE]("easy");
        this.$store.state.memory.cards.cards = this.cards.slice(0, 16);
      }
      if (modo === this.mode[1]) {
        this[MUTATIONS_CONSTANTS.SET_GAME_MODE]("medium");
        this.$store.state.memory.cards.cards = this.cards.slice(0, 24);

        console.log("medium game");
      }
      if (modo === this.mode[2]) {
        this[MUTATIONS_CONSTANTS.SET_GAME_MODE]("god");
        this.$store.state.memory.cards.cards = this.cards.slice(0, 32);
      } else {
        return null;
      }
    },
  },
  mounted() {
    this.setCards();
  },
});

export default Component;
</script>

<style scoped>
.title {
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
  color: black;
  font-weight: bold;
}

.buttonsContainer {
  display: flex;
  justify-content: center;
  margin: 20px;
}

.buttonsContainer > button {
  margin: 0 10px;
}

.cardsContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px 0px;
}

.number {
  width: 110px;
}

.imgFront {
  width: 100px;
  object-fit: cover;
  padding: 0px;
  height: 100px;
  border: none;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.75);
}

.card {
  margin: 10px;
}
</style>
