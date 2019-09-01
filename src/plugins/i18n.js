import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        "company": 'Company',
    },
    'zh': {
        "company": '公司',
    }
};

const i18n = new VueI18n({
    locale: 'zh', // set locale
    fallbackLocale: 'zh', // set fallback locale
    messages, // set locale messages
});

export default i18n;