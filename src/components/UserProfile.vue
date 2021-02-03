<template>
    <div class="user-profile">
        <div class="user-profile_user-panel">
            <h1 class="user-profile_username">@{{ user.username }}</h1>
            <div class="user-profile_admin-badge" v-if="user.isAdmin">
                Admin
            </div>
            <div class="user-profile_follower-count">
                <strong>Followers: </strong> {{ followers }}
            </div>
            <form class="user-profile_create-twoot" @submit.prevent="createNewTwoot">
              <label for="newTwoot"><strong>New Twoots</strong></label>
              <textarea id="newTwoot" rows="4" v-model="newTwootContent"></textarea>
              <div class="user-profile_create-twoot-type">
                <label for="newTwootType"><strong>Type: </strong></label>
                <select id="newTwootType" v-model="selectedTwootType">
                  <option :value="option.value" v-for="(option, index) in twootType" :key="index">
                    {{ option.name }}  
                  </option> 
                </select>
              </div>
              <button>
                Twoot!
              </button>
            </form>
        </div>
        <div class="user-profile_twoots-wrapper">
            <TwootItem v-for="twoot in user.twoots" :key="twoot.id" :username="user.username" :twoot="twoot" @favorite="toggleFavorite" />
        </div>
    </div>
</template>

<script>
import TwootItem from "./TwootItem";

export default {
  name: 'UserProfile',
  components: { TwootItem },
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: '_HankChen',
        firstName: 'Hank',
        lastName: 'Chen',
        email: 'hankchen19970516@yahoo.com.tw',
        isAdmin: true,
        twoots:[ // Twoots is declared as an array
            {id: 1, content: "Twoots is amazing!"},
            {id: 2, content: "R6 is funnnnnnnnnn!"}
        ]
      },
      twootType: [
        {value: "draft", name: "Draft"},
        {value: "instant", name: "Instant Twoot"}
      ],
      newTwootContent: "",
      selectedTwootType: "instant"
    }
  },
  watch: {
    followers(newFollowerCount, oldFolloerCount) {
      if (newFollowerCount > oldFolloerCount){
        console.log(`${this.user.username} has gained a follower`);
      }
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
      // String literal -> It is similar to "this.user.firstName+' '+this.user.lastName"
    }
  },
  methods: {
    followUser() {
      this.followers++;
    },
    toggleFavorite(id) {
      console.log(`Fovorited twoot @${id} !`)
    },
    createNewTwoot() {
      if(this.newTwootContent && this.selectedTwootType != "draft"){
        this.user.twoots.unshift({ // New data will be put at the beginning.
          id: this.user.twoots.length + 1,
          content: this.newTwootContent
        })
        this.newTwootContent = ""
      }
    }
  },
  mounted() {
    this.followUser();    
  }
}
</script>

<style>
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 90%;
    padding: 50px 5%;
}

.user-profile_user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
}

.user-profile_admin-badge{
    background-color: rebeccapurple;
    color: white;
    border-radius: 5px;
    margin-right: auto;
    padding: 0 10px;
    font-weight: bold;
    margin-bottom: 20px;
}

h1 {
    margin: 0;
}

.user-profile_twoots-wrapper {
  display: grid;
  grid-gap: 10px;
}

.user-profile_create-twoot {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
}

</style>
