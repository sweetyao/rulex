const getters = {
  user: state => state.user.user,
  configFlag: state => state.startConfig.configFlag,
  included: state => state.include.included,
  collapse: state => state.app.collapse,
  token: state => state.app.token,
  envs: state =>  state.app.envs
}

export default  getters
