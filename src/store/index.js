import { createStore } from 'vuex'
import { UserModule } from '../router/User'

export default createStore({
  state: {

  },
  // Mutations are the functions that effect the state.
  mutations: {
    
  },
  //Actions are functions that you call throughout the application that call mutations.
  actions: {
    
  },
  modules: {
    User: UserModule
  }
})
