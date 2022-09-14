import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'gray'
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  mutations: {
    increaseCounter(state, random) {
      state.counter += random
    },
    decreaseCounter(state, random) {
      state.counter -= random
    },
    randomColor(state) {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      state.colorCode = color
    },
  },
  actions: {
    //needed to do async function, action only do synchronus
    increaseCounter({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new').then(res => { commit('increaseCounter', res.data) })
    },
    decreaseCounter({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new').then(res => { commit('decreaseCounter', res.data) })
    }
  },
  modules: {
  }
})
