const state = {
  configFlag: true
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
