import Cookies from 'js-cookie';
const state = {
  collapse: true
}

const actions = {
  toggleSidebar({ commit }, data) {
    commit('toggleSidebar', data);
  }
}

const mutations = {
  toggleSidebar({ commit }, data) {
    this.collapse = data
    // Cookies.set('sidebarStatus', data);
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
};
