// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    product: {
      name: 'apple',
      num: 10,
      pirce: 100
    },
    isGuest: false,
    todos: [
      { id: 1, text: '这是一条数据', done: true },
      { id: 2, text: '这是一条数据', done: true },
      { id: 3, text: '这是一条数据', done: true },
      { id: 4, text: '这是一条数据', done: true },
      { id: 5, text: '这是一条数据', done: false }
    ]
  },
  getters: {
    count: state => state.count,
    product: state => state.product,
    isGuest: state => state.isGuest,
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})
// store.commit('increment')
// console.log(store.state.count)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
