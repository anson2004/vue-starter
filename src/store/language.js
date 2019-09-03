import i18n from '../plugins/i18n'

export default {
  namespaced: true,
  state: {
    language: 'zh', // defualt is chinese
  },
  mutations: {
    SET_LANGUAGE(state, lang) {
      /* eslint-disable */ 
      console.log('cange lan ' + lang)
      state.language = lang;
      i18n.locale = lang;
    },
  },
  actions: {
    setLanguage({ commit }, languages) {
        commit('SET_LANGUAGE', languages);
    },
  },
};