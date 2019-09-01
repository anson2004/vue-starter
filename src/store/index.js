import Vue from 'vue';
import Vuex from 'vuex';
import language from './language';

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    /* To add sub store later */
    language
  },
});

export default store;
