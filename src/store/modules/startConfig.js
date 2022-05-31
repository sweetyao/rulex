import api from '@/api'
const state = {
  configFlag: false
}

const actions = {
  //获取资料库是否完成初始化
  async getConfig({commit}) {
    try {
      const res = await api.home.isInitialized();
      if (res.initialized) {
        commit('setConfig', res.initialized);
      }else{
        commit('setConfig', false);
      }
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  setConfig( {commit}, data){
    commit('setConfig', data)
  }
}

const mutations = {
  setConfig: (state, data) => {
    state.configFlag = data;
  }
}

export default {
  namespace: true,
  state,
  actions,
  mutations
}
