import {createApp} from 'vue'
import {createI18n} from 'vue-i18n'

import App from './App.vue'

import {languages, currentLanguage} from './langs/';

const messages = Object.assign(languages)
export default function () {
    if (document.querySelector('#request:not(.data-v-app)')) {
        const i18n = createI18n({
            locale: currentLanguage,
            fallbackLocale: 'de',
            legacy: false,
            messages
        })
        createApp(App).use(i18n).mount('#request')
    }
}
