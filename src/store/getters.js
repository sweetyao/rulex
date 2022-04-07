const getters = {
  user: state => state.user.user,
  startConfig: state => state.startConfig.configFlag,
  included: state => state.include.included,
  collapse: state => state.app.collapse,
}

export default  getters
