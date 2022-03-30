const state = {
  configFlag: false
}

const actions = {
  setConfig( {commit}, data){
    commit('setConfig', data)
  }
}

const mutations = {
  setConfig: (state, data) => {
    console.log(data)
    state.configFlag = data;
  }
}

export default {
  namespace: true,
  state,
  actions,
  mutations
}
