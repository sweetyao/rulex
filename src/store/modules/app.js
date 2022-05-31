import Cookies from 'js-cookie';
import api from '@/api'
const state = {
  collapse: false,
  token: '',
  envs: []
}

const actions = {
  toggleSidebar({ commit }, data) {
    commit('toggleSidebar', data);
  },
  setToken( {commit}, data){
    commit('setToken', data)
  },
  setEnv( {commit}, data){
    commit('setEnv', data)
  },
  async getEnv({commit}, data){
    try {
      const res = await api.home.getEnvs(data);
      if (res.success) {
        commit('setEnv', res.data);
      } else {
        ElMessage.error(res.message)
      }
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }

  }
}

const mutations = {
  toggleSidebar(state, data) {
    state.collapse = data
    // Cookies.set('sidebarStatus', data);
  },
  setToken(state, data){
    state.token = data
  },
  setEnv(state, data){
    state.envs = data

  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
};
