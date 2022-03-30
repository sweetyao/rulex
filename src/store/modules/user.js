const state = {
  user: {
    username: ''
  }
}

const actions = {
  setUserInfo( {commit}, data){
    commit('setUserInfo', data)
  }
}

const mutations = {
  setUserInfo: (state, data) => {
    state.user = data;
  }
}

export default {
  namespace: true,
  state,
  actions,
  mutations
}
