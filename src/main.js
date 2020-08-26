import Vue from 'vue'
import App from './App.vue'
import store from './store'
import jokes from './components/jokes'

//store.commit('INIT_JOKES', [{test: 'test jokes'}, {test2:'test joke 2'}])
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
