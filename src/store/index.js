import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import getters from './getters'
import user from './modules/user'
import startConfig from './modules/startConfig'
import include from './modules/include'
import app from './modules/app'

const debug = process.env.NODE_ENV !== 'production';
const store = new Vuex.Store({
  modules: {
    user,
    startConfig,
    include,
    app
  },
  getters,
  strict: debug,
  plugins: [createPersistedState({paths: ['user', 'startConfig']})]

})

export default store
