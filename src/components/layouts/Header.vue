<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
    <div class="container-fluid spread">
      <router-link class="navbar-brand" to="/profile"
        ><i class="fas fa-user-astronaut profile-icon"></i
      ></router-link>
      <div>
        <button
          class="navbar-toggler toggleButton"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/players"
                ><i class="fas fa-users"></i> Players</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/game"
                ><i class="fas fa-gamepad icon"></i> Game</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login"
                ><i class="fas fa-sign-out-alt"></i> Logout</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import Vue from "vue";

const Component = Vue.extend({
  name: "Header",
});

export default Component;
</script>
<style scoped>
.profile-icon {
  font-size: 35px;
}

.icon {
  font-size: 20px;
}

@media (min-width: 980px) {
  .spread {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}
</style>