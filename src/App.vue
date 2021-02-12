<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'Home' }"> 
        <div class="navigation_logo">
          Twotter
        </div>
      </router-link>
      <!-- if is needed to declare only show the username when we actually have the user, since the page will finish rendering before we get the user info-->
      <div class="navigation_user" v-if="user"> 
        {{ user.username }}
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'App',
  setup(){
    const store = useStore();
    const user = computed(() => store.state.User.user);
    return{
      user
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #F3F5FA;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5%;
  background-color: #40a7c7;
  color: white;
  height: 35px;
  .navigation_logo {
    font-size: 24px;
    font-weight: bold;
  }
  .navigation_user {
    font-weight: bold;
  }
}
</style>