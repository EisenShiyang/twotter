export const UserModule = {
    namespaced: true,
    state: {
        user: null
      },
    // Mutations are the functions that effect the state.
     mutations: {
      SET_USER(state, user){
        state.user = user;
      }
    },
    //Actions are functions that you call throughout the application that call mutations.
    actions: {
      setuser({ commit }, user){
        commit('SET_USER', user);
      }
    }
}