import Vue from 'vue'
import Vuex from 'vuex'

import firebaseApp from '~/plugins/firebaseApp'
import users from './modules/users'
import conversations from './modules/conversations'

Vue.use(Vuex)
const state = {
  db: firebaseApp.firestore()
}

const createStore = () => {
  return new Vuex.Store({
    state,
    modules: {
      users,
      conversations
    }
  })
}
export default createStore
