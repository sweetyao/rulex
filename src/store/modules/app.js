import Cookies from 'js-cookie';
const state = {
  collapse: true,
  token: ''
}

const actions = {
  toggleSidebar({ commit }, data) {
    commit('toggleSidebar', data);
  },
  setToken( {commit}, data){
    commit('setToken', data)
  }
}

const mutations = {
  toggleSidebar({ commit }, data) {
    this.collapse = data
    // Cookies.set('sidebarStatus', data);
  },
  setToken({commit}, data){
    this.token = data
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
};
