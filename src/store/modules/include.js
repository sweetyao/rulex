const state = {
  included: []
};

const actions = {
  setIncluded({ commit }, data) {
    commit('setIncluded', data);
  },
  removeIncluded({ commit }) {
    commit('removeIncluded');
  }
};

const mutations = {
  setIncluded: (state, data) => {
    state.included = data;
  },
  removeIncluded: (state) => {
    state.included = [];
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
