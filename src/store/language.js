export default {
  namespaced: true,
  state: {
    language: 'zh', // defualt is chinese
  },
  mutations: {
    SET_LANGUAGE(state, lang) {
      state.language = lang;
    },
  },
  actions: {
    setLanguage({ commit }, languages) {
        commit('SET_LANGUAGE', languages);
    },
  },
};