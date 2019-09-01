import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        "company": 'Company',
        "service": 'Service',
        "contact": 'Contact',
        "blog": 'Blog',
        "about": 'About',
    },
    'zh': {
        "company": '公司',
        "service": '服务',
        "contact": '联系我们',
        "blog": '博客',
        "about": '关于',
    }
};

const i18n = new VueI18n({
    locale: 'zh', // set locale
    fallbackLocale: 'zh', // set fallback locale
    messages, // set locale messages
});

export default i18n;